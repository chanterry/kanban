import { makeStyles } from '@material-ui/core/styles';
import { useState } from 'react';
import './App.css';
import List from './components/List';
import store from './data/store'

const useStyle = makeStyles((theme) => ({
  root:{
      display: "flex",
      minHeight: "100vh",
      background: "green" 
  }
}))

function App() {

  const [data, setData] = useState(store);
 
  return (
    <div>
      {data.listIds.map((listId) => {
        const list = data.lists[listId];
        return <List key={listId} list={list} />
      })}
    </div>
  );
}

export default App;