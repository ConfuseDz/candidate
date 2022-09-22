import { useEffect, useState, createContext, useContext} from 'react';
import {useParams} from 'react-router-dom';
import axios from 'axios';
import {Button, Container} from "react-bootstrap";
import { AuthContext } from './GetToken';

const client = axios.create({
    baseURL:'https://api-candidate.workforce-staging.com/v1'
  });

 function Orders() {  

    const [listServices, setListServices] = useState();
    
    const auth = useContext(AuthContext);
    console.log(auth)
    

    function getOrders(){
        axios.defaults.headers.common = {'Authorization': `Bearer ${auth}`}
        const config = { headers: { Authorization: `Bearer ${auth}` } };
          client.get('/orders',
          config
        ).then((resOrders) => {
            // console.log(resOrders)
            resOrders.data.map((v, k) =>{
                return(v)
                console.log(v)
            })
        //   setMyOrders(resOrders.data);
        //   setListServices(resOrders)
        })
        .catch(err => console.log(err)) 
    }
    getOrders();
        
    

    // console.log(orderlist)
    
 
    return(
        <>
            <h1>Who lives in my garage?</h1>
           <p>{auth}</p>
            {/* <h2>{`Hello ${userToken} again!`}</h2> */}

            {/* {ordersList.map((v, k) =>{
                return(
                    <div key={k}>
                        <p>{v.value.service}</p>
                    </div>
                    
                )
            })}     */}
             {/* <p>I am a { JSON.stringify(props.myprops) }</p> */}
            
        </>
       
    )
}


export default Orders;