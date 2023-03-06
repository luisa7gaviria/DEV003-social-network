import {
  exit, addPost, deletePost, updatePosts,
} from '../lib/functions';

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

  const setUpPosts = (fbResponse) => {
    const postId = fbResponse.id;
    const data = fbResponse.data();
    if (data) {
      const postBox = `
      <div class="postBox">
       <div class="postContent">
         <h2 class="postTitle"> ${data.User} </h2>
         <p> ${data.Descripcion} </p>
         <span class="actTime"> ${data.Time} </span>
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

      buttonDelete.addEventListener('click', () => {
        console.log('click', postId);
      });

      // botón de editar
      const buttonEdit = document.createElement('button');
      buttonEdit.innerText = 'Editar';
      buttonEdit.setAttribute('id', 'editPost');
      const iconEdit = document.createElement('img');
      iconEdit.src = 'Images/editar.png';
      buttonEdit.appendChild(iconEdit);

      // div contendor de botones
      const buttonsContainer = document.createElement('div');
      buttonsContainer.setAttribute('class', 'buttonsContainer');
      buttonsContainer.appendChild(buttonDelete);
      buttonsContainer.appendChild(buttonEdit);

      postsContainer.appendChild(buttonsContainer);

      const postList = timelineContent.querySelector('#postList');
      postList.appendChild(postsContainer);
    }
  };

  updatePosts((querySnapshot) => {
    querySnapshot.forEach((cb) => {
      const cbData = cb;
      setUpPosts(cbData);
    });
  });
  // querySnapshot().then((doc) => {
  //   doc.forEach((cb) => {
  //     const cbData = cb;
  //     setUpPosts(cbData);
  //   });
  // });

  const postBtn = timelineContent.querySelector('#post');
  postBtn.disabled = true;
  const textPost = timelineContent.querySelector('#toPost');
  const count = timelineContent.querySelector('#count');

  textPost.addEventListener('keyup', (e) => {
    const targetInput = e.target.value;
    if (targetInput.length > 4) {
      postBtn.disabled = false;
    } else {
      postBtn.disabled = true;
    }
    count.innerHTML = targetInput.length;
  });

  postBtn.addEventListener('click', () => {
    addPost(textPost.value).then(() => {
      alert('Posteado con éxito!');
      textPost.value = '';
    });
  });

  return timelineContent;
};
