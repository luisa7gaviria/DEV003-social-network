import { login } from '../src/components/login';
import { logAcc } from '../src/lib/functions';

jest.mock('../src/lib/functions');

function tick() {
  return new Promise((resolve) => {
    setTimeout(resolve, 0);
  });
}

describe('Testeando componente de login', () => {
  document.body.appendChild(login());

  let logForm;
  let mailInput;
  let passwordInput;
  let successLogin;
  let modal;

  beforeEach(() => {
    logForm = document.getElementById('logForm');
    mailInput = document.getElementById('mail');
    passwordInput = document.getElementById('password');
    successLogin = document.getElementById('successLogin');
    modal = document.querySelector('.modal');
  });

  it('Debe mostrar modal de éxito si la promesa se resuelve/ el usuario se logea', async () => {
    logAcc.mockImplementationOnce((mail, password) => Promise.resolve({
      user: { userCredential: 365548, mail, password },
    }));

    mailInput.value = 'coraestrellado45@outlook.com';
    passwordInput.value = 'esterDe5/';

    logForm.click();
    logAcc(mailInput, passwordInput);
    await tick();
    expect(modal).not.toBe(null);
    expect(successLogin.textContent).toBe('¡ Ingreso exitoso ! Ya puedes continuar a tu muro');
  });
});
