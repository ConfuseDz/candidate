import axios from 'axios';
import Header from './Header';
import './Home.css';
import { useState, useEffect, useContext } from 'react';
import {Container, Card, Button, Row, Col} from "react-bootstrap";
import { Link } from 'react-router-dom';


const client = axios.create({
  baseURL:'https://api-candidate.workforce-staging.com/v1'
})

function Home() {
  const [getData, setGetData] = useState();  

  useEffect(()=>{ 
    async function getPost(){
      await client.get('/services').then((res) => {        
        setGetData(res.data);        
      })
    }    
      getPost();    
  },[]); 
 
  if (!getData) return null;
    
    return (
      <div>
      <Header />
      <Container>
      <div>
      <Row>
      {getData.map((v, k) =>{        
        return(
            <Col md={4} key={k}>
              <Card className='cardHome'>
              <Link to={`/services`}  state={{ id: `${v._id}` }}>
                <Card.Img className='cardImg' src={v.picture} alt={v.name}/>                
                <Card.Body>
                <Row>
                  <Col lg md ="auto" xs="9" align="start"> <div className='cardTitle dark'>{v.name}</div></Col>
                  <Col md="4" xs="auto"  align="end" style={{marginInlineStart: 'auto'}}> 
                    <div className='cardTitle-price'>
                      <span className='yellow block'>เริ่มต้น </span>
                      <span className='blue block fw-bold'>฿ {v.price.toLocaleString()}</span>
                    </div>
                    </Col>
                </Row>                
                </Card.Body>
                </Link>
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