import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import './App.css';
import List from './components/List/List';
import store from './utils/store';
import storeAPI from './utils/storeAPI'

function App() {
 
  const [data, setData] = useState(store);
  const addCard = (title, listId)  => {
    const newCardId = uuid();
    const newCard = {
      id: newCardId,
      title, 
    };

    const list = data.lists[listId]
    list.cards = [...list.cards, newCard];

    const newState = {
      ...data,
      lists:{
        ...data.lists,
        [listId]: list,
      },
    };
    setData(newState);
  
  }

  return (
    <storeAPI.Provider value={{addCard}}>
      
      <div className="App">
        {data.listIds.map((listId) => {
          const list = data.lists[listId];

          return <List list={list} key={listId}/>
        })}
      </div>

    </storeAPI.Provider>
  );
}

export default App;
