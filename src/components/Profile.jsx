import { useContext } from 'react';
import UserContext from '../contexts';

const Profile = () => {
  const { username, password } = useContext(UserContext);

  return (
    <div className="flex py-6 w-[350px] flex-col mb-6 rounded-md bg-white text-black">
      <div className="mx-8 mb-4 flex flex-row justify-start space-x-2">
        <div className="h-7 w-3 bg-purple-700" />
        <div className="w-3 text-center font-sans text-xl font-bold">
          <h1>Profile</h1>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <h2 className="my-2 w-72 p-2 rounded-md">{username}</h2>
        <h2 className="my-2 w-72 p-2 rounded-md">{password}</h2>
      </div>
    </div>
  );
};

export default Profile;
