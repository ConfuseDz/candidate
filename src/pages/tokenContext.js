import React, { useEffect } from 'react';
import axios from 'axios';
 
// Creating the context object and passing the default values.
const client = axios.create({
    baseURL:'https://api-candidate.workforce-staging.com/v1'
  });

const myToken = '';
 
const getToken = (myToken) => {    
     client.post('/auth/signin', 
    { "username": "seekster11", "password": "seekster11" })
    .then((resToken) =>{ 
        if (resToken.data) {
            console.log(resToken.data);
           
             return 'aaa'
         }
        return myToken = resToken.data.accessToken
        // console.log(resToken.data.accessToken)
    })   
};
    // getToken()
    
    // getToken().then((res) =>{
    //     console.log(res)
    // }        
    // )
   
   
const tokenContext = React.createContext({status:null,login:()=>{}});
 
export default tokenContext;