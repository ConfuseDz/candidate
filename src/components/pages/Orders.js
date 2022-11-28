import { useEffect, useState, useContext} from 'react';
import axios from 'axios';
import format from 'date-fns/format';
import {Container, Card, Row, Col} from "react-bootstrap";
import { Mytoken } from '../../App';
import MenuBar from '../header/menuBar';

const client = axios.create({
    baseURL:'https://api-candidate.workforce-staging.com/v1'
  });
  
 function Orders() { 
     
    const [response, setResponse] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true); 
    const token = JSON.parse(localStorage.getItem("token"));    
   
    useEffect(() =>{
      const fetchData = async() => {
        axios.defaults.headers.common = {'Authorization': `Bearer ${token}`}
        const config = {headers: { Authorization: `Bearer ${token}` }};
        setLoading(true);     
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

      fetchData();     
    },[]);
    
    if (loading) {
      return (
      <div style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}>Loading the data</div>
    );
    }
  
    return(      
      <div>      
      <MenuBar/>
      <Container className='mt-5'>
          <h1 className='fw-bold mb-3'>รายการ</h1>
          {error && error.message}
          {response && response?.map(
            (item, k) => 
            <Card key={k} className='mb-2 shadow-sm' style={{borderColor:'#e3e3e3'}}>            
            <Card.Body>
              <Row>
                <Col sm md='9' as='h3' className='fw-semibold'>{item.service.name}</Col>
                <Col sm md='3' align="end" className='fw-bold fs-5'><span className='yellow fw-bold'> ราคา </span> <span className='blue fw-bold'>{item.service.price.toLocaleString()}</span></Col>                
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
    )
}

export default Orders;

