import './MenuBar.css';
import {Link} from "react-router-dom";
import {Nav} from "react-bootstrap";
import { useState, useEffect, createContext } from 'react';



const MenuBar = () => {
    return (  
            <Nav className="justify-content-end menubar">            
              <Nav.Link as={Link} to={'/services'}>บริการ</Nav.Link>
              <Nav.Link as={Link} to={'/Orders'}>รายการ</Nav.Link>              
            </Nav>            
    )
  };
  
  export default MenuBar;