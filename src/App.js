import { makeStyles } from '@material-ui/core/styles';
import { useState } from 'react';
import './App.css';
import List from './components/List';
import store from './data/store'
import storeAPI from './data/storeAPI';
import { v4 as uuid } from 'uuid';

const useStyle = makeStyles((theme) => ({
  root:{
      display: "flex",
      minHeight: "100vh",
      background: "green" 
  }
}))

function App() {

  const [data, setData] = useState(store);

  const addTask = (title, listId) => {
    const newTaskId = uuid();
    const newTask = {
      id: newTaskId,
      title
    }

    const list = data.lists[listId];
    list.tasks = [...list.tasks, newTask]

    const updatedState = {
      ...data,
      lists:{
        ...data.lists,
        [listId]: list,
      }
    }
    setData(updatedState)
  };
 
  return (
    <storeAPI.Provider value={{addTask}}>
      <div>
        {data.listIds.map((listId) => {
          const list = data.lists[listId];
          return <List key={listId} list={list} />
        })}
      </div>
    </storeAPI.Provider>

  );
}

export default App;