import { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';
import axios from 'axios';
import {Button, Container} from "react-bootstrap";
import GetToken from './GetToken';
// import MenuBar from './MenuBar';

const Orders = (props) =>{  
    
    return(
        // <h1>{props.test}</h1>
        <div>
             <p>I am a { JSON.stringify(props.myprops) }</p>
            
        </div>
       
    )
}

export default Orders;