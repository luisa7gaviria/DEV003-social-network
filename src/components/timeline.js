import { onNavigate } from '../router';
import { exit } from '../lib/auth';

export const timeline = () => {
  const sectionTimeline = ` 
  <div class="header">
  <button class = "go-out"> Salir </button> </div>
  <h3 class="start"> Inicio </h3>
  <img class="logo" src="Images/logo.png">
   
  <div class="box-post"> 
  <div class="messanger"> </div>
  <button class="post"> Publicar </button> </div>
  <div class="box1"> </div>
   
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
      });
  });

  timelineContent.querySelector('#stay-button').addEventListener('click', () => {
    exitModal.querySelector('.modal').classList.remove('modal-success');
  });

  return timelineContent;
};
