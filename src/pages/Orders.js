import { useEffect, useState, useContext} from 'react';
import axios from 'axios';
import {DataContext} from '../App';
import { format, formatISO } from "date-fns";
import {Container, Card, Button, Row, Col} from "react-bootstrap";
import MenuBar from './MenuBar';



const client = axios.create({
    baseURL:'https://api-candidate.workforce-staging.com/v1'
  });
  
 function Orders() {  
   
    const myToken = useContext(DataContext);
    const [dataOrders, setDataOrders] = useState(myToken);   
    const [response, setResponse] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
  
    // function getOrders(){
    //   setLoading(true);
    //     axios.defaults.headers.common = {'Authorization': `Bearer ${myToken}`}
    //     const config = { headers: { Authorization: `Bearer ${myToken}` } };        
    //       client.get('/orders',
    //       config
    //     ).then((resOrders) => {             
    //         setLoading(false);         
    //         setDataOrders(resOrders.data);
            
    //     })
    //     .catch(err => console.log(err)) 
    // };

    const fetchData = async () => {
      setLoading(true);
      setDataOrders(myToken);
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

  const [authstatus, setauthstatus] = useState(false);
  const login = () => {
    setauthstatus(true);
  };
  
  
    return(      
      <div>      
      <MenuBar/>  
      {loading ? ( <div>Loading...</div> )  : (
        <div>
          <Container className='mt-5'>
          <h1 className='fw-bold mb-3'>รายการ</h1>
          {error && error.message}
          {response && response?.map(
            (item, k) => 
            <Card key={k} className='mb-2 shadow-sm' style={{borderColor:'#e3e3e3'}}>            
            <Card.Body>
              <Row>
                <Col sm md='9' as='h3' className='fw-semibold'>{item.service.name}</Col>
                <Col sm md='3' align="end" className='fw-bold fs-5'><span className='text-warning fw-bold'> ราคา </span> <span className='text-info fw-bold'>{item.service.price}</span></Col>                
              </Row>
              <Row xs="auto">
                <Col>{format(new Date(item.createdAt), 'dd MMMM yyyy')}</Col>
                <Col>{format(new Date(item.createdAt), 'HH:mm')}</Col>
              </Row>
            </Card.Body>
            </Card>            
          )}
          </Container>
        </div>
      )}
    </div>
    )
}

export default Orders;

