 import { makeStyles } from '@material-ui/core/styles';
import './App.css';
import List from './components/List';

const useStyle = makeStyles((theme) => ({
  root:{
      display: "flex",
      minHeight: "100vh",
      background: "green" 
  }
}))

function App() {

  return (


    <List/>

  );
}

export default App;