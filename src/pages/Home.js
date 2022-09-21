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
      })
    }    
      getPost();    
  },[]); 
 
  if (!get) return null;
    
    return (
      <div>
      <Header />
      <Container>
      <Row>
      {get.map((v, k) =>{        
        return(
            <Col md={4} key={k}>
              <Card>
                <Card.Img className='cardImg' src={v.picture}/>                
                <Card.Body>
                <Link to={`/services/${v._id}`}>
                <Row>
                  <Col md={7}> <Card.Title>{v.name}</Card.Title></Col>
                  <Col md="auto"> <Card.Text>เริ่มต้น ฿ {v.price}</Card.Text></Col>
                </Row>
                </Link>
                </Card.Body>
              </Card>    
            </Col>          
              )
      })}
      </Row>
      </Container>     
     </div>
    )
  };
  
  export default Home;