import { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';
import axios from 'axios';
import {Button, Container} from "react-bootstrap";
import GetToken from './GetToken';

const Orders = (props) =>{
   console.log(props)

    return(
        <h1>{props.test}</h1>
        // <GetToken test={userToken} />
    )
}

export default Orders;