import axios from 'axios';
import { useState, useEffect } from 'react';
import Orders from './Orders';

const BASEURL = 'https://api-candidate.workforce-staging.com/v1/';

const client = axios.create({
  baseURL:'https://api-candidate.workforce-staging.com/v1'
})

function GetToken(props){
    const [userToken, setUserToken] = useState(props);   
    const [myOrders, setMyOrders] = useState();
    const getUser = async() => { 
     axios.post(`${BASEURL}auth/signin`, 
     { "username": "seekster11", "password": "seekster11" })
          .then(response => {
            setUserToken(response.data.accessToken);                      
            });
    };    
    useEffect(()=>{     
      getUser();
      getOrders();     
    },[]);
    console.log(userToken) 
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

    const myElement = myOrders;

    return(
      <>
      {/* <Orders test={userToken} /> */}
      <Orders myprops={myElement}/>
      </>
         
    );   
}

export default GetToken;