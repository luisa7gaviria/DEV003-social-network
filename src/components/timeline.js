import { onSnapshot } from 'firebase/firestore';
import {
  exit, addPost, deletePost, q, editPost,
} from '../lib/functions';
import { auth } from '../firebaseconf';

export const timeline = (onNavigate) => {
  const sectionTimeline = ` 
  <div class="timeHeader">
     <button class = "go-out"> Salir </button> 
     <h3 class="time-t"> Inicio </h3>
     <img class="time-logo" src="Images/logo.png">
  </div>
  
  <div class="posting-box">
     <textarea id="toPost" placeholder="¿En qué estás pensando?..." maxlength="180" cols="50"></textarea>
     <button id="post"> Publicar </button>
     <p class="counter"><span id="count"></span> / 180 </p>
  </div>

  <div class="timelineBox"> 
    <ul id="postList"> 
    </ul>
  </div>

  <div class="modal"> 
      <div class="modal-content">
        <p> ¿ Realmente quieres cerrar sesión? </p>
        <div class="sign-out-confirmation" >
           <button id="exit-button" > SI </button>
           <button id="stay-button" > NO </button>
         </div>
        </div>
    </div>

`;
  const timelineContent = document.createElement('section');
  timelineContent.innerHTML = sectionTimeline;

  timelineContent.querySelector('.go-out').addEventListener('click', () => {
    timelineContent.querySelector('.modal').classList.add('success-modal');
  });

  timelineContent.querySelector('#exit-button').addEventListener('click', () => {
    exit()
      .then(() => {
        onNavigate('/');
      });
  });

  timelineContent.querySelector('#stay-button').addEventListener('click', () => {
    timelineContent.querySelector('.modal').classList.remove('success-modal');
  });

  // pintando datos en el muro en tiempo real

  onSnapshot(q, (snapshot) => {
    timelineContent.querySelector('#postList').innerHTML = ''; // reemplazamos el contenido cada vez que hay un cambio
    snapshot.forEach((everypost) => {
      const postsData = everypost.data();
      const postId = everypost.id;

      if (postsData) {
        const postBox = `
        <div class="postBox">
         <div class="postContent">
           <h2 class="postTitle"> ${postsData.User} </h2>
           <p> ${postsData.Descripcion} </p>
           <span class="actTime"> ${postsData.Time} </span>
          </div>
        </div>
  
        <div class="delete-modal"> 
        <div class="modal-content">
          <p> ¿ Estás seguro de que deseas eliminar este post ? </p>
          <div class="delete-confirmation" >
             <button id="yes-delete" > SI </button>
             <button id="no-delete" > NO </button>
           </div>
          </div>
      </div>
  
        `;
        const postsContainer = document.createElement('li');
        postsContainer.innerHTML = postBox;

        // botón de borrar
        const buttonDelete = document.createElement('button');
        buttonDelete.innerText = 'Eliminar';
        buttonDelete.setAttribute('id', 'deletePost');
        const iconDelete = document.createElement('img');
        iconDelete.src = 'Images/trash-bin.png';
        buttonDelete.appendChild(iconDelete);

        const deleteModal = postsContainer.querySelector('.delete-modal'); // guardamos el modal

        buttonDelete.addEventListener('click', () => {
          deleteModal.classList.add('delete-modal-activo');
        });
        postsContainer.querySelector('#yes-delete').addEventListener('click', () => {
          deletePost(postId).then(() => {
            deleteModal.classList.remove('delete-modal-activo');
          });
        });
        postsContainer.querySelector('#no-delete').addEventListener('click', () => {
          deleteModal.classList.remove('delete-modal-activo');
        });

        // botón de editar
        const buttonEdit = document.createElement('button');
        buttonEdit.innerText = 'Editar';
        buttonEdit.setAttribute('id', 'editPost');
        const iconEdit = document.createElement('img');
        iconEdit.src = 'Images/editar.png';
        buttonEdit.appendChild(iconEdit);

        buttonEdit.addEventListener('click', () => {
          editPost('modificado', postId);
        });

        // div contendor de botones
        const buttonsContainer = document.createElement('div');
        buttonsContainer.setAttribute('class', 'buttonsContainer');
        buttonsContainer.appendChild(buttonDelete);
        buttonsContainer.appendChild(buttonEdit);

        // pasamos los botones a nuestro contenedor de posts
        postsContainer.appendChild(buttonsContainer);
        // condición para que solo el usuario manipule sus propios posts
        if (auth.currentUser.uid !== postsData.User) {
          buttonsContainer.style.display = 'none';
        }

        const postList = timelineContent.querySelector('#postList');
        postList.appendChild(postsContainer);
      }
    });
  });

  // traemos el textarea, el botón de publicar y el span vacio
  const postBtn = timelineContent.querySelector('#post');
  postBtn.disabled = true;
  const textPost = timelineContent.querySelector('#toPost');
  const count = timelineContent.querySelector('#count');

  // contando los carácteres que se están escribiendo en el text area
  textPost.addEventListener('keyup', (e) => {
    const targetInput = e.target.value;
    // habilitamos/deshabilitamos segun la longitud de los caracteres
    if (targetInput.length > 4) {
      postBtn.disabled = false;
    } else {
      postBtn.disabled = true;
    }
    count.innerHTML = targetInput.length;
  });

  postBtn.addEventListener('click', () => {
    addPost(textPost.value).then(() => {
      textPost.value = '';
      count.innerHTML = '';
    });
  });

  return timelineContent;
};
