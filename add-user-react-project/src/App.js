import { useState } from 'react';
import './App.css';
import NewUser from './components/AddUser/NewUser/NewUser';
import UserList from './components/AddUser/UserList/UserList';

const DUMMY_INFO = [
  {
    id: 'e1',
    name: "Mahroos",
    age: 23
  },
  {
    id: 'e1',
    name: "Falah",
    age: 21
  }
];

function App() {
  const [info, setInfo] = useState(DUMMY_INFO);

  const addInfoHandler = info => {
    setInfo(prevInfo => {
      return [info, ...prevInfo];
    });
  };

  return (
    <div className="App">
      <NewUser onAddInfo={addInfoHandler}/>
      <UserList info={info}/>
    </div>
  );
}

export default App;
