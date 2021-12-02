import React from 'react';
import axios from 'axios';
import { Button, ButtonGroup} from "@chakra-ui/react";


async function populateTables() {
    try {
      const response = await axios.put("http://localhost:3010/populateTables",{});
      console.log(response);
      alert(response.data);
    } catch (err){
      console.log(err);
    }
  
  }



class Pop extends React.Component {
  constructor() {
    super();
    this.state = {
      someKey: 'someValue'
    };
  }

  render() {
    return (
        <div>
            <Button colorScheme="purple" variant="solid" onClick={populateTables} >Populate All Tables</Button>
            
        </div>
    );
  }

  componentDidMount() {
    this.setState({
      someKey: 'otherValue'
    });
  }
}

export default Pop;
