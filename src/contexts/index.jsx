import { createContext } from 'react';

const UserContext = createContext({
  username: '',
  setUsername: () => {},
  password: '',
  setPassword: () => {},
});

export default UserContext;
