import { createContext } from 'react';

const initialState = {
  firstName: 'Felix',
  lastName: 'Ruby',
};

export type UserState = typeof initialState;

const userContext = createContext<UserState>(initialState);

export default userContext;
