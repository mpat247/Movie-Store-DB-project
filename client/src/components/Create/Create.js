import React from 'react';
import { Button, ButtonGroup } from "@chakra-ui/react";
import axios from 'axios';
import './Create.css'
async function createTables() {
  try {
    const response = await axios.put("http://localhost:3010/createTables",{});
    console.log(response);
    alert(response.data);
  } catch (err){
    console.log(err);
    
  }

}


class Create extends React.Component {
  constructor() {
    super();
    this.state = {
      someKey: 'someValue'
    };
  }


 

  render() {
    return (
      <div className="create-screen">
        &nbsp;
        &nbsp;
        &nbsp;
        <Button colorScheme="purple" variant="solid" onClick={createTables} >Create Tables</Button>
        &nbsp;
        &nbsp;
        &nbsp;
      </div>
    );
  }

  componentDidMount() {
    this.setState({
 
    });
  }
}

export default Create;
