import { useState } from 'react';
import Login from './components/Login';
import Profile from './components/Profile';
import UserContext from './contexts';

const App = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setLogin] = useState(false);

  return (
    <div className="App">
      <div className="w-full min-h-screen flex flex-col bg-gray-200 items-center justify-center">
        <UserContext.Provider
          value={{ username, setUsername, password, setPassword, setLogin }}
        >
          {isLoggedIn ? <Profile /> : <Login />}
        </UserContext.Provider>
      </div>
    </div>
  );
};

export default App;
