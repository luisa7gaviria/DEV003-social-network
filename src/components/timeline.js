import { onNavigate } from '../router';
import { exit } from '../lib/auth';

export const timeline = () => {
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

  <div class="box1"> 

  </div>

  <div class="modal"> 
      <div class="modal-content">
        <p> ¿ Realmente quieres cerrar sesión? </p>
        <div class="sign-out-confirmation">
           <button id="exit-button" > SI </button>
           <button id="stay-button" > NO </button>
         </div>
        </div>
    </div>

`;
  const timelineContent = document.createElement('section');
  timelineContent.innerHTML = sectionTimeline;
  const exitModal = timelineContent.querySelector('.modal');

  timelineContent.querySelector('.go-out').addEventListener('click', () => {
    exitModal.classList.add('success-modal');
  });

  timelineContent.querySelector('#exit-button').addEventListener('click', () => {
    exit()
      .then(() => {
        onNavigate('/');
        window.location.reload();
      });
  });

  timelineContent.querySelector('#stay-button').addEventListener('click', () => {
    exitModal.classList.remove('success-modal');
  });

  return timelineContent;
};
