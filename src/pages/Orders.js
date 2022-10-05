import { useEffect, useState, useContext} from 'react';
import axios from 'axios';
import {DataContext} from '../App';
import { format } from "date-fns";

const client = axios.create({
    baseURL:'https://api-candidate.workforce-staging.com/v1'
  });
  
 function Orders() {  
   
    const myToken = useContext(DataContext);
    const [dataOrders, setDataOrders] = useState('aaa');   
    const [response, setResponse] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
  
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

    const fetchData = async () => {
      setLoading(true);
      axios.defaults.headers.common = {'Authorization': `Bearer ${myToken}`}
      const config = { headers: { Authorization: `Bearer ${myToken}` } };
      try {
        const res = await client.get('/orders', config);       
        const newres = res.data.filter(object => {
            return object.service !== null;
          }).filter(ress =>{
            return Date(ress.createdAt)
          });
        setResponse(newres);
       
        setError(null);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };
   
    useEffect(() =>{
      // getOrders();
      fetchData();
    },[]);
   
    
  // let today = new Date("September 30, 2020 11:28:00");
  let today = format(new Date(response[0].createdAt), 'dd/MMM/yyyy');
  // console.log(today.toLocaleString("th-TH", { timeZone: "UTC" }));
  // console.log(today.getDate() + '/' + today.getMonth() + '/' + today.getFullYear())
  //  console.log(response[0].createdAt)
  console.log(today)
  
 

  const [authstatus, setauthstatus] = useState(false);
  const login = () => {
    setauthstatus(true);
  };
 
    return(
      <div>
      {loading ? ( <div>Loading...</div> )  : (
        <div>
          {error && error.message}
          {response && response?.map(
            (item, k) => <p key={k}>{item.service.name}<br />
            {item.service.description}<br />
            <b>ราคา : {item.service.price}</b>
            <br />
            <b>{format(new Date(item.createdAt), 'dd/MMM/yyyy')}</b>
            </p>
            
          )}
        </div>
      )}
    </div>
    )
}

export default Orders;

