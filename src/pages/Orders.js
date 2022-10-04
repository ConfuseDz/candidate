import { useEffect, useState, useContext} from 'react';
import axios from 'axios';
import {DataContext} from '../App';

const client = axios.create({
    baseURL:'https://api-candidate.workforce-staging.com/v1'
  });

 function Orders() {  
   
    const myToken = useContext(DataContext);

    const [dataOrders, setDataOrders] = useState('aaa');   
    const [loading, setLoading] = useState(false); 
    const [quote, setQuote] = useState({});

    // const getRandomQuote = () => {
    //   setLoading(true);
    //   fetch('https://api.quotable.io/random')
    //     .then((res) => res.json())
    //     .then((data) => {
    //       setLoading(false);
    //       setQuote(data);
    //     });
    // };
   

    function getOrders(){
      setLoading(true);
        axios.defaults.headers.common = {'Authorization': `Bearer ${myToken}`}
        const config = { headers: { Authorization: `Bearer ${myToken}` } };
        
          client.get('/orders',
          config
        ).then((resOrders) => {             
            setLoading(false);         
            setDataOrders(resOrders.data);
            
        })
        .catch(err => console.log(err)) 
    };
   
    useEffect(() =>{
      getOrders();
      // getRandomQuote();
      
    },[])
    console.log(dataOrders)
   
    

  const [authstatus, setauthstatus] = useState(false);
  const login = () => {
    setauthstatus(true);
  };
 
    return(    
      <div>
       
      </div>

    )
}

export default Orders;

