export const Timeline = () => {
  const sectionTimeline = ` 
<div class="header">
 <img src="Images/logo.png">
 <h3> Inicio </h3>
 <a href='/'><button>Salir<button></a>
 </div>

`;
  const timelineContent = document.createElement('section');
  timelineContent.innerHTML = sectionTimeline;

  return timelineContent;
};
