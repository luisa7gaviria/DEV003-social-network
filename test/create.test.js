// import { create } from '../src/components/create';
// jest.mock('/..src/validator');
import { createAccount } from '../src/lib/auth';

describe('Testing createAccount function', () => {
  it('should be a function', () => {
    expect(typeof createAccount).toBe('function');
  });
});
