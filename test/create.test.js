// import { create } from '../src/components/create';
// jest.mock('/..src/validator');
import { createAccount } from '../src/lib/auth';

import { create } from '../src/components/create';

describe('Testing createAccount function', () => {
  it('should be a function', () => {
    expect(typeof createAccount).toBe('function');
  });
});

describe.only('probar el componete de registro', () => {
  it('si el usuario y la contraseñá son validos dbemos mostrar un modal', () => {
    document.body.append(create());
    const form = document.getElementById("createForm");

    // necesitamos un mock de la promesa

    // ejecutar el submit
    
    // si la promesa se resuelve 
      // expect el modal debe existir 

    // si no 
      // expect el mensaje de error debe existir 

    expect(form).not.toBe(null);
  });
});
