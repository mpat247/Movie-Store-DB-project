import './Menu.css';
import { Button, ButtonGroup } from "@chakra-ui/react";
import axios from 'axios';
import { useState } from 'react';
import { useEffect} from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Link } from 'react-router-dom';

function Menu() {
  


  return (
    <div className="menu">
      <header className="App-header">
        
        <div className="submenu">
          <Button colorScheme="teal" variant="outline" > <Link to="/create">Create Tables
          </Link> </Button>
          &nbsp;

          &nbsp;
          <Button colorScheme="teal" variant="outline" > <Link to="/Drop">Drop Tables
          </Link> </Button>
        </div>
        <div className="title">
          <h1 className="home" ><Link to="/"> Online Movie Store
          </Link></h1>
        </div>
        <div className="submenu">
        <Button colorScheme="teal" variant="outline" > <Link to="/Pop">Populate Titles
          </Link> </Button>
          &nbsp;

          &nbsp;
          <Button colorScheme="teal" variant="outline" > <Link to="/Queries">Query Tables
          </Link> </Button>
        </div>
      </header>

    </div>
  );
}

export default Menu;
