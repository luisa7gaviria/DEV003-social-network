import { onNavigate } from '../router'

export const timeline = () => {
  const sectionTimeline = ` 
  <div class="header">
   <img src="Images/logo.png">
   <h3> Inicio </h3>
   <button class="go-out">Salir<button>
  </div>

`;
  const timelineContent = document.createElement('section');
  timelineContent.innerHTML = sectionTimeline;

  timelineContent.querySelector('.go-out').addEventListener('click', () => {
    onNavigate('/');
  });

  return timelineContent;
};
