// import { askUserLike } from '../src/lib/functions';
// import { timeline } from '../src/components/timeline';

// jest.mock('../src/lib/functions');

// function tick() {
//   return new Promise((resolve) => {
//     setTimeout(resolve, 0);
//   });
// }

// describe('Testeando función de likes', () => {
//   document.body.appendChild(timeline());

//   let post;
//   let likeBtn;
//   let counterLike;
//   let currentUser;

//   beforeEach(() => {
//     post = document.querySelector('.postContent');
//     likeBtn = document.getElementById('likeBtn');
//     counterLike = document.querySelector('.totalLikes');
//   });

//   it('Debe agregar un like', async () => {
//     askUserLike.mockImplementationOnce(() => Promise.resolve({
//       Name: 'carlitos',
//       User: 'a52dsP5jKGnsjdFjhys8',
//       Descripcion: 'hola soy carlos',
//       Time: '22:49:6 2023-3-13',
//       Likes: ['j8NFyeEXz7fNfhu2Las2'],
//     }));

//     post.id = 'Yj6y8zFKs4RW7yLgns5Z';
//     currentUser.uid = 'a52dsP5jKGnsjdFjhys8';

//     likeBtn.click();
//     askUserLike(currentUser.uid, post.id);
//     await tick();
//     expect(counterLike).toBe(2);
//   });
// });
