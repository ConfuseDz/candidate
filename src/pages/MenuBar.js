import './MenuBar.css';
import {Link} from "react-router-dom";
import {Nav, Container, Button} from "react-bootstrap";
import { useState, useEffect } from 'react';
import axios from 'axios';


const client = axios.create({
  baseURL:'https://api-candidate.workforce-staging.com/v1'
});

const MenuBar = () => {
  const [userToken, setUserToken] = useState();
  const [myOrders, setMyOrders] = useState();
  useEffect(()=>{     
    async function getToken(){
      await client.post('/auth/signin', 
      { "username": "seekster11", "password": "seekster11" })
      .then((resToken) =>{
        console.log(resToken.data.accessToken)
        setUserToken(resToken.data.accessToken)
      })
    }   
    getToken();   
    // getOrders();
  },[]);

  axios.defaults.headers.common = {'Authorization': `Bearer ${userToken}`}
  const config = {
    headers: { Authorization: `Bearer ${userToken}` }
  };
  

  function getOrders(){
    client.get('/orders',
      config
    ).then((resOrders) => {
      setMyOrders(resOrders.data)
      console.log(resOrders)
    })
  }
  
 
  

    return (
            <Nav className="justify-content-end menubar">            
              <Nav.Link as={Link} to={'/Services'}>บริการ</Nav.Link>
              <Nav.Link as={Link} to={'/Orders'}>รายการ</Nav.Link>
              <Button onClick={getOrders}>test</Button>                  
            </Nav>
            // <><Orders myprops={myElement}/></>
            
            
    )
  };
  
  export default MenuBar;