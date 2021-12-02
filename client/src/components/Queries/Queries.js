import React from 'react';
import { AiOutlineConsoleSql } from "react-icons/ai";
import axios from 'axios';
import { Button, ButtonGroup, Input} from "@chakra-ui/react";
import './Queries.css'




class Queries extends React.Component {
  constructor() {
    super();
    this.state = {
        value:  "",
        results: null
    };
  }

  sendQuery = async() => {
    try {
      console.log({value : this.state.value})
      const response = await axios.post("http://localhost:3010/Queery",{value : this.state.value}).catch( err => {alert(err)});
      console.log(response);
      this.setState({results: response.data})
    } catch (err){
      console.log(err);
    }
  
  }

 handleChange = (newValue) => {
     this.setState({
         value : newValue.target.value
     })
 }

  render() {
    return (
        <div className="Queries">
            <Input type="text" value={this.state.value} onChange={this.handleChange} placeholder='input your query here' className="textBox"/>
            <Button leftIcon={<AiOutlineConsoleSql className="component"/>} colorScheme='pink' variant='solid' className="submit-button" onClick={this.sendQuery}>
                Submit Query
            </Button>
            <div>
                        
                {this.state ? this.state?.results?.map(row=> 
                <code>{JSON.stringify(row)}</code>
                ): null}
                {console.log(this.state)}
                    
            </div>
        </div>
    );
  }

  componentDidMount() {
    this.setState({
      
    });
  }
}

export default Queries;
