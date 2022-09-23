import { useEffect, useState, createContext, useContext} from 'react';
import {useParams} from 'react-router-dom';
import axios from 'axios';
import {Button, Container} from "react-bootstrap";
import GetToken from './GetToken';
import tokenContext from './tokenContext';


const client = axios.create({
    baseURL:'https://api-candidate.workforce-staging.com/v1'
  });

 function Orders() {  
    const authContext = createContext(null);

    const [listServices, setListServices] = useState();

    function getOrders(){
        // axios.defaults.headers.common = {'Authorization': `Bearer ${auth}`}
        // const config = { headers: { Authorization: `Bearer ${auth}` } };
          client.get('/orders',
        //   config
        ).then((resOrders) => {
            // console.log(resOrders)
            // resOrders.data.map((v, k) =>{
            //     return(v)
            //     console.log(v)
            // })
        //   setMyOrders(resOrders.data);
        //   setListServices(resOrders)
        })
        .catch(err => console.log(err)) 
    }
    // getOrders();

   

  const [authstatus, setauthstatus] = useState(false);
  const login = () => {
    setauthstatus(true);
  };
 
    return(
        <tokenContext.Provider value={{ status: authstatus, login: login }}>
        <GetToken />
        </tokenContext.Provider>
    )
}

export default Orders;

