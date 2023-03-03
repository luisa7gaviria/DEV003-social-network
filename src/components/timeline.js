import { onNavigate } from '../router';
import {
  exit, validateLog, querySnapshot, addPost,
} from '../lib/functions';

export function timeline() {
  const sectionTimeline = ` 
  <div class="timeHeader">
     <button class = "go-out"> Salir </button> 
     <h3 class="time-t"> Inicio </h3>
     <img class="time-logo" src="Images/logo.png">
  </div>
  
  <div class="posting-box">
     <textarea id="toPost" placeholder="¿En qué estás pensando?..." maxlength="180"></textarea>
     <button class="post"> Publicar </button>
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

  const setUpPosts = (data) => {
    if (data) {
      const postBox = `
      <div class="postBox">
       <div class="postContent">
         <h2 class="postTitle"> ${data.Titulo} </h2>
         <p> ${data.Descripcion} </p>
        </div>
      </div>

      `;
      const postsContainer = document.createElement('li');
      postsContainer.innerHTML = postBox;

      const postList = timelineContent.querySelector('#postList');
      postList.appendChild(postsContainer);
    }
  };

  querySnapshot().then((doc) => {
    doc.forEach((cb) => {
      const cbData = cb.data();
      setUpPosts(cbData);
    });
  });

  timelineContent.querySelector('.post').addEventListener('click', () => {
    const textPost = timelineContent.querySelector('#toPost');
    addPost(textPost.value);
    console.log(textPost.value);
  });

  validateLog();
  return timelineContent;
}
