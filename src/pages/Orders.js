import { useEffect, useState, useContext, createContext} from 'react';
import {useParams} from 'react-router-dom';
import axios from 'axios';
import {Button, Container} from "react-bootstrap";
import GetToken from './GetToken';
// import MenuBar from './MenuBar';

const Orders = (props) =>{  
    const [listServices, setListServices] = useState();
    const UserContext = createContext();
  
    const userToken = useContext(UserContext);
        // console.log(ordersList)
        
        
       

    return(
        <>
            <h1>Who lives in my garage?</h1>
            
            <h2>{`Hello ${userToken} again!`}</h2>

            {/* {ordersList.map((v, k) =>{
                return(
                    <div key={k}>
                        <p>{v.value.service}</p>
                    </div>
                    
                )
            })} */}    
             {/* <p>I am a { JSON.stringify(props.myprops) }</p> */}
            
        </>
       
    )
}

export default Orders;