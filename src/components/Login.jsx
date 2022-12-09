import { useContext } from 'react';
import UserContext from '../contexts';

const Login = () => {
  const { setUsername, setPassword, setLogin } = useContext(UserContext);

  return (
    <div className="flex py-6 w-[350px] flex-col mb-6 rounded-md bg-white text-black">
      <div className="mx-8 mb-4 flex flex-row justify-start space-x-2">
        <div className="h-7 w-3 bg-purple-700" />
        <div className="w-3 text-center font-sans text-xl font-bold">
          <h1>Login</h1>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <input
          className="my-2 w-72 border p-2 rounded-md"
          type="email"
          placeholder="Username"
          onChange={event => setUsername(event.target.value)}
        />
        <input
          className="my-2 w-72 border p-2 rounded-md"
          type="password"
          placeholder="Password"
          onChange={event => setPassword(event.target.value)}
        />
      </div>
      <div className="my-2 flex justify-center">
        <button
          className="w-72 bg-purple-700 p-2 rounded-md text-white font-sans"
          onClick={() => setLogin(true)}
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
