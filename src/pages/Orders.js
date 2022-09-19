import { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';
import axios from 'axios';
import {Button, Container} from "react-bootstrap";
import GetToken from './GetToken';
import MenuBar from './MenuBar';

const Orders = (props) =>{  
    console.log(props)
    return(
        // <h1>{props.test}</h1>
        <div>
             <h2>I am a { JSON.stringify(props.myprops) }!</h2>;
            
        </div>
       
    )
}

export default Orders;