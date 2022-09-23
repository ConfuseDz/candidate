import axios from 'axios';
import { useState, useEffect, createContext, useContext } from 'react';
import Orders from './Orders';
import tokenContext from './tokenContext';


const client = axios.create({
  baseURL:'https://api-candidate.workforce-staging.com/v1'
});
// const auth = useContext(AuthContext);
// console.log(auth)



function GetToken(){
    const [userToken, setUserToken] = useState();   
    // const [myOrders, setMyOrders] = useState(null);

    useEffect(()=>{ 
      // getToken()
     
      },[]);

    async function getToken(){
      await client.post('/auth/signin', 
      { "username": "seekster11", "password": "seekster11" })
      .then((resToken) =>{          
        setUserToken(resToken.data.accessToken)
        // const userToken = resToken.data.accessToken
        console.log(userToken)
      
      });
    }

    // async function getToken(){
    //   await client.post('/auth/signin', 
    //   { "username": "seekster11", "password": "seekster11" })
    //   .then((resToken) =>{
    //     // console.log(resToken.data.accessToken)
    //     setUserToken(resToken.data.accessToken)
    //   });
    //   axios.defaults.headers.common = {'Authorization': `Bearer ${userToken}`}
    //   const config = { headers: { Authorization: `Bearer ${userToken}` } };
    //   await client.get('/orders',
    //     config
    //   ).then((resOrders) => {
    //     setMyOrders(resOrders.data);
    //     console.log(myOrders)
    //   });

    // }   

    // async function getToken(){
    //   await client.post('/auth/signin', 
    //   { "username": "seekster11", "password": "seekster11" })
    //   .then((resToken) =>{          
    //     // setUserToken(resToken.data.accessToken)
    //     const userToken = resToken.data.accessToken
    //     return (console.log(userToken))
    //   })
      
    // }   

    //  function getOrders(){
    //   client.get('/orders',
    //     config
    //   ).then((resOrders) => {
    //     setMyOrders(resOrders.data);
    //     console.log(myOrders)
    //   })
    // };      
    axios.defaults.headers.common = {'Authorization': `Bearer ${userToken}`}
    const config = { headers: { Authorization: `Bearer ${userToken}` } };
    const getUser = async() => { 
     await client.post(`/auth/signin`, 
     { "username": "seekster11", "password": "seekster11" })
          .then(response => {
            setUserToken(response.data.accessToken);   
            console.log(userToken)                   
            })
            .catch(error => console.error(`Error: ${error}`))
    };

    // const ordersList = myOrders.map((v, k, ) =>{
    //   return{key:k, value: v}
    // });
  // console.log(ordersList[0].value.service)
  
  const auth = useContext(tokenContext);
  console.log(auth.status);

  

    return(
      <><h2>GetToken</h2>
       <h1>Are you authenticated?</h1>
      {auth.status ? <p>Yes you are</p> : <p>Nopes</p>}
 
      <button onClick={auth.login}>Click To Login</button>
      </>  
        
    );   
}


export default GetToken;