import axios from 'axios';
import Header from './Header';
import './Home.css';
import { useState, useEffect } from 'react';
import {Container, Card, Button, Row, Col} from "react-bootstrap";
import { Link } from 'react-router-dom';
import GetToken from './GetToken';

const client = axios.create({
  baseURL:'https://api-candidate.workforce-staging.com/v1'
})

function Home(props) {
  const [get, setGet] = useState();
  const [userToken, setUserToken] = useState();

  useEffect(()=>{ 
    async function getPost(){
      await client.get('/services').then((res) => {        
        setGet(res.data);
        console.log(res.data)
      })
    }    
      getPost();    
  },[]); 
 
  if (!get) return null;
    
    return (
      <div>
      <Header />
      <Container>
      <div>
      <Row>
      {get.map((v, k) =>{        
        return(
            <Col md={4} key={k}>
              <Card className='cardHome'>
                <Card.Img className='cardImg' src={v.picture} alt={v.name}/>                
                <Card.Body>
                <Link to={`/services/${v._id}`}>
                <Row>
                  <Col md sm="auto" align="start"> <Card.Text className='cardTitle dark'>{v.name}</Card.Text></Col>
                  <Col md = "4" sm="3" align="end"> <Card.Text className='cardTitle-price'><span className='yellow'>เริ่มต้น </span><span className='blue'>฿ {v.price}</span></Card.Text></Col>
                </Row>
                </Link>
                </Card.Body>
              </Card>    
            </Col>          
              )
      })}
      </Row>
      </div>
      </Container>     
     </div>
    )
  };
  
  export default Home;