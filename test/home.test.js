import { home } from '../src/components/home';

describe('Testeando el componente de Home', () => {
  document.body.appendChild(home());

  let logInButton;
  let registerButton;

  beforeEach(() => {
    logInButton = document.getElementById('log-in-btn');
    registerButton = document.getElementById('go-to-register');
  });

  it('Deben existir botones para navegar hacia login y registro', () => {
    expect(logInButton).not.toBe(null);
    expect(registerButton).not.toBe(null);
  });
});
