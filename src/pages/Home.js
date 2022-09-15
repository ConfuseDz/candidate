import axios from 'axios';
import Header from './Header';
import './Home.css';
import { useState, useEffect } from 'react';
import {Container, Card, Button, Row, Col} from "react-bootstrap";
import { Link } from 'react-router-dom';

const testUrl = 'https://jsonplaceholder.typicode.com/posts/1';
const urlGetService = 'https://api-candidate.workforce-staging.com/v1/services';

function Home() {
  const [get, setGet] = useState(null);
  const [user, setUser] = useState();

  function getUser(){ 
   axios.post('https://api-candidate.workforce-staging.com/v1/auth/signin', { "username": "seekster11", "password": "seekster11" })
        .then(response => {console.log(response.data)});
  }

  function getServices(){
    axios.get(urlGetService).then((res) => {
      const myData = res.data;
      setGet(myData);
    })
    .catch(error => console.error(`Error : ${error}`));
  }

    useEffect(()=>{
      getUser();
      getServices();
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