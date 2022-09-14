import { useEffect } from 'react';
import {useParams} from 'react-router-dom';

const Services = () => {
    const params = useParams();

    useEffect(() =>{
      console.log(params)
    })

    return (
    
    <h1>Services</h1>
    
    );
  };
  
  export default Services;