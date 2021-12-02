import React from 'react';
import axios from 'axios';
import { Button, ButtonGroup} from "@chakra-ui/react";


async function dropTables() {
    try {
      const response = await axios.post("http://localhost:3010/drop",{});
      console.log(response);
      alert(response.data);
    } catch (err){
      console.log(err);
    }
  
  }


class Drop extends React.Component {
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
            <Button colorScheme="purple" variant="solid" onClick={dropTables} >Drop All Tables</Button>
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

export default Drop;
