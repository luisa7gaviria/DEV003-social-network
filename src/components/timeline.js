import { onSnapshot } from 'firebase/firestore';
import {
  exit, addPost, deletePost, q, editPost, sumLike, removeLike,
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
     <p class="counter"><span id="count"></span> / 180 </p>
     <button id="post"> Publicar </button>
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
           <h2 class="postTitle"> ${postsData.Name} </h2>
           <p> ${postsData.Descripcion} </p>
           <span class="actTime"> ${postsData.Time} </span>
           <div class= "likePost"> 
             <img id="likeBtn" src="Images/like.png">
             <p class="totalLikes"> ${postsData.Likes.length} </p>
                       
           </div>
           <div class = "buttonsContainer">
             <button id ="deletePost"> Eliminar
               <img src="Images/trash-bin.png">
             </button>
               <button id="editPost"> Editar
                 <img src="Images/editar.png">
               </button>
           </div>
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

      <div class="edit-modal"> 
        <div class="modal-content"> 
          <textarea id="editablePost" maxlength="180" cols="50"> </textarea>
          <p class="counter2"><span id="count2"></span> / 180 </p>
          <div class="edit-confirmation" >
             <button id="save-edit" > Guardar </button>
             <button id="cancel-edit" > Cancelar </button>
           </div>
          </div>
      </div>
  
        `;
        const postsContainer = document.createElement('li');
        postsContainer.innerHTML = postBox;

        const deleteModal = postsContainer.querySelector('.delete-modal'); // guardamos el modal de borrar

        postsContainer.querySelector('#deletePost').addEventListener('click', () => {
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

        const editModal = postsContainer.querySelector('.edit-modal'); // guardamos el modal de editar
        postsContainer.querySelector('#editPost').addEventListener('click', () => {
          editModal.classList.add('edit-modal-activo');
        });

        // segundo textarea

        const editTextarea = postsContainer.querySelector('#editablePost');
        const count2 = postsContainer.querySelector('#count2');
        editTextarea.value = postsData.Descripcion; // asignamos al textarea el valor de cada post

        editTextarea.addEventListener('keyup', (e) => {
          const targetEdit = e.target.value;
          count2.innerHTML = targetEdit.length;
        });

        postsContainer.querySelector('#save-edit').addEventListener('click', () => {
          editPost(editTextarea.value, postId);
        });

        postsContainer.querySelector('#cancel-edit').addEventListener('click', () => {
          editModal.classList.remove('edit-modal-activo');
        });

        // dar like y quitar like

        let userStatus = false; // autenticamos si ya likeó o no
        const likeBtn = postsContainer.querySelector('#likeBtn');
        likeBtn.addEventListener('click', () => {
          if (!userStatus) {
            likeBtn.classList.add('liked');
            sumLike(postId, auth.currentUser.uid);
            userStatus = true; // estado true = likeó
          } else if (userStatus) { // si ya likeó puede retirar su like y vuelve a false
            likeBtn.classList.remove('liked');
            removeLike(postId, auth.currentUser.uid);
            userStatus = false;
          }
        });

        // condición para que solo el usuario manipule sus propios posts
        if (auth.currentUser.uid !== postsData.User) {
          postsContainer.querySelector('.buttonsContainer').style.display = 'none';
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

  // contando los carácteres que se están escribiendo en el textarea
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
      postBtn.disabled = true;
    });
  });

  return timelineContent;
};
