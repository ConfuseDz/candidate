import React, { useEffect } from 'react';
import axios from 'axios';
 
// Creating the context object and passing the default values.
const client = axios.create({
    baseURL:'https://api-candidate.workforce-staging.com/v1'
  });

const getToken = () => {    
     client.post('/auth/signin', 
    { "username": "seekster11", "password": "seekster11" })
    .then((resToken) =>{     
        // resToken.data.accessToken
        // console.log(resToken.data.accessToken)
    })   
};
    // getToken()
 
   
   
const tokenContext = React.createContext({status:null,login:()=>{}});
 
export default tokenContext;