// import { create } from '../src/components/create';
// jest.mock('/..src/validator');
import { createAccount } from '../src/lib/auth';

import { create } from '../src/components/create';
console.log(create)

describe('Testing createAccount function', () => {
  it('should be a function', () => {
    expect(typeof createAccount).toBe('function');
  });

});


describe.only('probar el componete de registro', () => {
  it('si el usuario y la contraseñá son validos dbemos mostrar un modal', () => {
    document.body.innerHTML = create()

    const form  = document.getElementById("createForm");

    expect(form).not.toBe(null)
  });

});
