import axios from 'axios';
import { useState, useEffect, createContext, useContext } from 'react';
import Orders from './Orders';


const client = axios.create({
  baseURL:'https://api-candidate.workforce-staging.com/v1'
});


const AuthContext = createContext();

function GetToken(){
    const [userToken, setUserToken] = useState();   
    // const [myOrders, setMyOrders] = useState(null);
    const myToken = '';
    const myOrders = '';
    useEffect(()=>{ 
      async function getToken(myToken){
        await client.post('/auth/signin', 
        { "username": "seekster11", "password": "seekster11" })
        .then((resToken) =>{          
          setUserToken(resToken.data.accessToken)
          // const userToken = resToken.data.accessToken
          // console.log(userToken)
          return(myToken = userToken)
        });

        console.log(userToken)
        // setTimeout(() => {
        //   axios.defaults.headers.common = {'Authorization': `Bearer ${userToken}`}
        // const config = { headers: { Authorization: `Bearer ${userToken}` } };
        //   client.get('/orders',
        //   config
        // ).then((resOrders) => {
        //   // setMyOrders(resOrders.data);
          
        // })
        // .catch(err => console.log(err)) 
          
        //   }, 2000);
               
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
      
      <AuthContext.Provider value={userToken}>
      <section className="app-section">
          <div className="app-container">
              <Orders />
          </div>
      </section>
    </AuthContext.Provider>
      
         
    );   
}

export {AuthContext}
export default GetToken;