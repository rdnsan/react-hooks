import { useContext, useState } from 'react';
import UserContext, { UserState } from '../context/user-context';

const ConsumerComponent = () => {
  const user = useContext<UserState>(UserContext);

  return (
    <div>
      <div>First Name: {user.firstName}</div>
      <div>Last Name: {user.lastName}</div>
    </div>
  );
};

const UseContextComponent = () => {
  const [user, userSet] = useState<UserState>({
    firstName: 'Alycia',
    lastName: 'Jane',
  });

  return (
    <UserContext.Provider value={user}>
      <ConsumerComponent />
      <button onClick={() => userSet({ firstName: 'Liam', lastName: 'Cole' })}>
        Change context
      </button>
    </UserContext.Provider>
  );
};

export default UseContextComponent;
