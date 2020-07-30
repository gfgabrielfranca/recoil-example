import { selector } from 'recoil';
import { usernameState } from '../../atoms';

export const upperUsername = selector({
  key: "upperUsernameState",
  get: ({ get }) => {
    const username = get(usernameState);
    const usernameUpper = username.toUpperCase();
    return usernameUpper;
  }
});