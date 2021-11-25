import logo from './logo.svg';
import './App.css';
import { Button, ButtonGroup } from "@chakra-ui/react";
import axios from 'axios';

function App() {
  let titles = [];
  async function componentDidMount() {
    try {
       this.titles = await axios.get("http://localhost:3010/getTitles");
      } catch (err){
        console.log(err);
      }
  }

  async function createTables() {
    try {
      const response = await axios.put("http://localhost:3010/createTables",{});
      console.log(response);
      alert(response.data);
    } catch (err){
      console.log(err);
      
    }
  
  }
  

  async function populateTables() {
    try {
      const response = await axios.put("http://localhost:3010/populateTables",{});
      console.log(response);
      alert(response.data);
    } catch (err){
      console.log(err);
    }
  
  }

  async function dropTables() {
    try {
      const response = await axios.post("http://localhost:3010/drop",{});
      console.log(response);
      alert(response.data);
    } catch (err){
      console.log(err);
    }
  
  }

  return (
    <div className="App">
      <header className="App-header">
        
        <div className="menu">
          <Button colorScheme="teal" variant="outline" onClick={createTables} >Create Tables</Button>
          &nbsp;

          &nbsp;
          <Button colorScheme="teal" variant="outline" onClick={dropTables} >Drop Tables</Button>
        </div>
        <div className="title">
          <h1>ψ ☠̶̧̢̻̯̞̹̠͙̜̗̞͖̤̦͍̯̫͓̣̰̯̦̳̗̹̳͍͕͔̜̖̤̱̺̥̙̤̬̟̬͚͍̬̌̂̿́͜ͅ ̶̠̈́̇̔͂̊̌͋̋́͆̈́͛̂̆̾̓̍̅̀̽͑̌̅̀͒̔͒́̒͋͛̄͗͆͑͂̕͠͝͝ŏ̷̫̫̿̍̍͜ņ̶̡̧̛̬̲͉̖͈̗̟͕̮̲͇̳͈͇̘͉̼̜̙͚̮̰͍̠̩͋͐̑̆̀͌̋̀͐̀̏͗̏͑̒̋̆̆̏̌͒̐͐̕̕͜͝͝ļ̸̢̛̻͉̝̼͙͔͎̤̞̹͆̓̋̓͒̌͑́̄̄̓͑̓́̃̈̏̉̄̈̂̒̂̆̎̋̈̓͗̎́̒̽̈́͂́͗́͘͘͘͠͝͝ȋ̸̡̢̡̡̧̨̨̨̛̛̱̯̯̦̩͍̻̻̘̺̠̬͇͚̝͉̺͈̜̹̝̦͖͕̰̙̫͇͌̒͒̓̾̑́̂̽̋͛̍̎̅̂̉͒͊̓̄̇̃͋̓̊̓̌͗̍̆͂̕̚͠͝͠͠͝n̸̡̨̛͕͈̜̮͇̳̜͓͓̞̙̻͇͙̦̯̝̬̼̬͂̍͑̉͛̅͗͒̀̉̅̊̎̄͐̃́̌̊̑̇̿̅̎̽̓͗͂͗͊̍̀͆̆̎̎̄́̊͛̃͘̕͝͝͝͝ͅe̴̡̧̫̳̖͖̖̩̺̙̯͎͈̪̼͙͎͋͑̀̑̔͆̋̉̏̿̐͊̿͆̏͐̈́̃̑̊̑͊̋̐̌̀͋̓̔̐̋̑̂͌̿͘̚͜͠͝͝͝͠ ̷̧̨̨̼̭̺̠̫͖̗̼̖͇̞̼̣̰͍̘̜̬̟̠̼͇̤̙̮̘̝͙̹̫̻͙̜̦̦̼͋̒̏̿̀̾̓̈́́̚͜͝m̸̱̖͉̠̪͖͔̼̥͕͔͉̥͔͇̮͕̠̝̤̹͈̙̦͈͉͙̾̇̊̆̓̽̅̈͋̿̇̊͝ͅͅő̴̡̨͎̞͎͚̪̣͖͍͍͇̭͇̱̲̣̪̼͙̮̤̙̺̩͆͗̂̄͒̈̍͜͜͠͠͠ͅv̶̡͉͇͇̟͚̬͔͙͒̏͐̉̓̀͊̉̾̈͆̋́̉͛͗͆͒͑͑̅͑̈̓̓̐̑̈́̽̈̄̾̈́̌͌́́̋̉̃͑̚͝͠͝ͅì̶̛̮͍̬͕̝̜̗̜̺̠̘̼̬͂̅̎̀̈́̇̏̓̔͐̑͗̄̑̂͒͂̂͜ę̶̧̧̡̨̛̛͇̪̫͎͚̮͉̰͉͖̞̟͕̙̫̫͍͖̠͙͎̯̪̹̈͂̋̀̈̒̿͑͌͗̊͋̋́̒̑́͗͋́̉̿̔͋͌̆́͌͂̿̈́̈́̋͒̐̈́̔̿̿̔͒͛͑̃̋̌ͅ ̵̧̧̧̛̳̰͉̻͈̝͚͎̰̟̫̖̣̥̋̓͐́̊͆̀̒̃̔̓̎̾̊̈́̀̆̿͊͛̊̔̍̄̈́́̌̓͘̕͘ͅs̵̛̼̱̠͚̝͙̰̓̅͋̓́̂̄̒̌̉̿̿͌̑͛̓̇̒̃̇̀͊̀̉̆̾̈̀́̕t̶̢̨̡̢̧̳͕͈͎̫̺̠̜̠̙̺͙̳͇̰͙̼̘͎̮̥̥̙̩͙̜̥͍̱͈̹͖̳̱̫̯͇́͌̌̂͆̌͂̋̈́͒͌͊̈̃̀̒̀͋̌̌͊̌͒̈́̀̔͑̉̎͂̿̈̋̈́̋͘͘͝ͅớ̷̭̲̥̪͖̙̠̮̯̀̐͐͑̂̿̂͑̋̽̓̎͛̈̒̓̈̇̈́͂́̾̋̈̐̀̿͊͘̕͘͜͜͝r̶̨̡̜̝̼̘͍̰̻͎̝̺̠̯̯͙̹͍̰̗͌̉͌͑̇͜ͅe̶̡̡̡̯̲̫̮̭̝͕͍͎͍̬̖̲̼͎̘̘͙̺͉̗͎̻͔̻̝̣̜̪̘̞̓̒͊̕͜ͅ ̸̮̻͂͊̔̇͋͑̍̄́̚͘͘͜͝⛥̸̱̙͔͖̘͖͎͂̕͜͜ͅ ψ</h1>
        </div>
        <div className="menu">
          <Button colorScheme="teal" variant="outline" onClick={populateTables} >Populate Tables</Button>
          &nbsp;

          &nbsp;
          <Button colorScheme="teal" variant="outline" onClick={dropTables} >Query Tables</Button>
        </div>
      </header>
      <body>

      {titles.map(title=> (
<div>
<img src={title.art}/>
<h5>{title.Title_Name}</h5>
</div>

      ))}


        <h5>Wolf Of Wall Street</h5>
        <h5>Django</h5>
        <h5>The Purge</h5>
        <h5>South Park</h5>
        <h5>simpsons</h5>
      </body>
    </div>
  );
}

export default App;
