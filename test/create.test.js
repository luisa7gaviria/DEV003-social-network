// import { createAccount } from '../src/lib/functions';
import { create } from '../src/components/create';

describe('probando el componete de registro', () => {
  it('si el usuario y la contraseña son validos dbemos mostrar un modal', () => {
    document.body.append(create());

    const form = document.getElementById('createForm');
    // necesitamos un mock de la promesa

    // ejecutar el submit
    // si la promesa se resuelve
    // expect el modal debe existir
    // si no
    // expect el mensaje de error debe existir

    expect(form).not.toBe(null);
  });
});
