import axios from 'axios';
import { useState, useEffect, useContext } from 'react';
import Orders from './Orders';

// const BASEURL = 'https://api-candidate.workforce-staging.com/v1/';

const client = axios.create({
  baseURL:'https://api-candidate.workforce-staging.com/v1'
})

function GetToken(props){
    const [userToken, setUserToken] = useState('userToken');   
    // const [myOrders, setMyOrders] = useState(null);
  //  const userToken = '';
   const myOrders = '';
    useEffect(()=>{ 
      async function getToken(userToken, myOrders){
        await client.post('/auth/signin', 
        { "username": "seekster11", "password": "seekster11" })
        .then((resToken) =>{          
          // setUserToken(resToken.data.accessToken)
          const userToken = resToken.data.accessToken
          console.log(userToken)
        });

        axios.defaults.headers.common = {'Authorization': `Bearer ${userToken}`}
        const config = { headers: { Authorization: `Bearer ${userToken}` } };

        await client.get('/orders',
          config
        ).then((resOrders) => {
          // setMyOrders(resOrders.data);
          // console.log(myOrders)
          myOrders = resOrders.data
        })
        .catch(err => console.log(err))        
      }   
      getToken();
    },[]);

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

    // const getUser = async() => { 
    //  await client.post(`/auth/signin`, 
    //  { "username": "seekster11", "password": "seekster11" })
    //       .then(response => {
    //         setUserToken(response.data.accessToken);   
    //         console.log(userToken)                   
    //         })
    //         .catch(error => console.error(`Error: ${error}`))
    // };

    // const ordersList = myOrders.map((v, k, ) =>{
    //   return{key:k, value: v}
    // });
  // console.log(ordersList[0].value.service)
  


    return(
      <>
      {/* <Orders test={userToken} /> */}
      {/* <Orders myprops={myElement}/> */}
      <h1>{`Hello ${userToken}!`}</h1>
      
      </>
         
    );   
}

export default GetToken;