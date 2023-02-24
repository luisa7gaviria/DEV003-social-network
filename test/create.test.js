// import { validateForm } from "../src/validator";
// import { create } from '../src/components/create';
// jest.mock('/..src/validator');
import { createAccount } from '../src/lib/auth';

test('should show error', async () => {
  try {
    createAccount();
  } catch (e) {
    expect(e).toMatch('error');
  }
});
