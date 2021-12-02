import React from 'react';
import axios from 'axios';
import './Home.css'; 

class Home extends React.Component {
  constructor() {
    super();
    
  }

  render() {
    return (
    <div className="HomeScreen">
    
        {this.state ? this.state?.titles.data.map(ti=> 
        <div className="film-title">
          

          
          <div className="boxart">
            <img src={ti[3]}/>
          </div>
          
          <div className="actualtitle">
            {ti[1]}
          </div>
        </div>
        ): null}
        {console.log(this.state)}

  </div>
    );
  }

  async componentDidMount() {
    const titles = await axios.get("http://localhost:3010/getTitles")
    this.setState({
      titles
    })
  }
}

export default Home;
