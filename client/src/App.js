import logo from './logo.svg';
import './App.css';
import { Button, ButtonGroup } from "@chakra-ui/react";
import axios from 'axios';
import { useState } from 'react';
import { useEffect} from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Menu from './components/Menu/Menu';
import Home from './components/Home/Home';
import Create from './components/Create/Create';
import Drop from './components/Drop/Drop';
import Pop from './components/Pop/Pop';
import Queries from './components/Queries/Queries';



function App() {
  
 
  
  return (
    <div className="App">
     <Router>
       <Menu/>
       <Routes>
         <Route path="/" element={<Home/>}/>
         <Route path="/Create" element={<Create/>}/>
         <Route path="/Drop" element={<Drop/>}/>
         <Route path="/Pop" element={<Pop/>}/>
         <Route path="/Queries" element={<Queries/>}/>
       </Routes>
     </Router>
    </div>
  );
}

export default App;
