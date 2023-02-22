import { validateForm } from '../src/validator';
import { create } from '../src/components/create';

jest.mock(validateForm);

test('should return true', () => {
  const value = true;
  validateForm.mockImplementationOnce(() => { Promise.resolve(value); });
  return create.then((input) => expect(input).toEqual(value));
});
