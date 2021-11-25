import logo from './logo.svg';
import './App.css';
import { Button, ButtonGroup } from "@chakra-ui/react";
import axios from 'axios';

function App() {

  async function createTables() {
    try {
      const response = await axios.put("http://localhost:3010/createTables",{});
      console.log(response);
    } catch (err){
      console.log(err);
    }
  
  }

  async function dropTables() {
    try {
      const response = await axios.post("http://localhost:3010/drop",{});
      console.log(response);
    } catch (err){
      console.log(err);
    }
  
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>ONLINE MOVIE STORE</h1>
        <Button colorScheme="teal" variant="outline" onClick={createTables} >Create Tables</Button>
        <Button colorScheme="teal" variant="outline" onClick={dropTables} >Drop Tables</Button>
      </header>
    </div>
  );
}

export default App;
