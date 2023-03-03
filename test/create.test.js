// import { createAccount } from '../src/lib/functions';
import { create } from '../src/components/create';

describe('probando el componete de registro', () => {
  it('si el usuario y la contraseña son validos dbemos mostrar un modal', () => {
    document.body.append(create());

    document.getElementById('createAcc').click();

    expect(document.querySelector('.modal-content p').textContent).toEqual(' Tu usuario ha sido creado  Gracias por registrarte en GGamers');
  });
});
