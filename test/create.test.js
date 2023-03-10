import { createAccount } from '../src/lib/functions';
import { create } from '../src/components/create';

jest.mock('../src/lib/functions');

function tick() {
  return new Promise((resolve) => {
    setTimeout(resolve, 0);
  });
}

describe('Testeando el componete de registro', () => {
  document.body.appendChild(create());
  let form;
  let mail;
  let Inputpassword;
  let createdMsg;

  beforeEach(() => {
    form = document.getElementById('createForm');
    mail = document.getElementById('mail');
    Inputpassword = document.getElementById('password');
    createdMsg = document.getElementById('createdMsg');
  });

  it('Mensaje de cuenta creada con éxito', async () => {
    createAccount.mockImplementationOnce((email, password) => Promise.resolve({
      user: { userCredential: 12365, email, password },
    }));

    mail.value = 'catslover78@hotmail.com';
    Inputpassword.value = 'Papa09li/u';

    form.submit();
    createAccount();
    await tick();
    expect(createdMsg.textContent).toBe(' Tu usuario ha sido creado  Gracias por registrarte en GGamers');
  });

  // it('Mensaje de error cuando creas con un correo en uso', async () => {
  //   createAccount.mockImplementationOnce((email, password) => Promise.reject(
  //     new Error('Este correo ya está en uso.'),
  //   ));

  //   form.submit();
  //   createAccount();
  //   await tick();
  //   expect(createAccount).toHaveBeenCalled();
  // });
});
