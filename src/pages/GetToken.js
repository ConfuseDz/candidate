import axios from 'axios';
import { useState, useEffect } from 'react';
import Orders from './Orders';

const BASEURL = 'https://api-candidate.workforce-staging.com/v1/';

function GetToken(props){
    const [userToken, setUserToken] = useState(props);   
    const getUser = async() => { 
     axios.post(`${BASEURL}auth/signin`, 
     { "username": "seekster11", "password": "seekster11" })
          .then(response => {
            setUserToken(response.data.accessToken);                      
            });
    };

    
    useEffect(()=>{     
      getUser();       
    },[]);
    console.log(userToken) 
    return(
      <>
      <Orders test={userToken} />
      </>
         
    );   
}

export default GetToken;