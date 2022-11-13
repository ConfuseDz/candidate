import axios from 'axios';
import { useState, useEffect, createContext, useContext } from 'react';
import Orders from './Orders';
import tokenContext from './tokenContext';


const client = axios.create({
  baseURL:'https://api-candidate.workforce-staging.com/v1'
});

function GetToken(){
    const [userToken, setUserToken] = useState([]);   
    // const [myOrders, setMyOrders] = useState(null);

    useEffect(()=>{ 
      async function getToken(){
        await client.post('/auth/signin', 
        { "username": "seekster11", "password": "seekster11" })
        .then((resToken) =>{          
          setUserToken(resToken.data.accessToken)
          // const userToken = resToken.data.accessToken
          // console.log(userToken)
        
        });
      }
      getToken()
     
      },[]);
      console.log(userToken)

    
   
    
    return(
      <><h2>GetToken</h2>
       <h1>Are you authenticated?</h1>
    
      </>  
        
    );   
}


export default GetToken;