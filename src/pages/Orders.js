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
        console.log(newres)
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

    const removeNulls = (obj) => {
      const isArray = Array.isArray(obj);
      for (const k of Object.keys(obj)) {
         if (obj[k] === null) {
            if (isArray) {
               obj.splice(k, 1)
            } else {
               delete obj[k];
            }
         } else if (typeof obj[k] === "object") {
            removeNulls(obj[k]);
         }
         if (isArray && obj.length === k) {
            removeNulls(obj);
         }
      }
      return obj;
   }

   function clean(obj) {
    for (var propName in obj) {
      if (obj[propName] === null || obj[propName] === undefined) {
        delete obj[propName];
      }
    }
    return obj
  }
   
  //  const newObj = removeNulls(response)
  // const newObj = clean(response)
  // const newArr = response.filter(object => {
  //   return object.service !== null;
  // });
  //  console.log(newArr)
    
  let today = new Date("September 30, 2020 11:28:00");
  console.log(today.toLocaleString("th-TH", { timeZone: "UTC" }));
  console.log(today.getDate() + '/' + today.getMonth() + '/' + today.getFullYear())
 

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
            <b>{Date(item.createdAt)}</b>
            </p>
            
          )}
        </div>
      )}
    </div>
    )
}

export default Orders;

