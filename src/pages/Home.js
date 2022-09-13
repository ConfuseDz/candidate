import axios from 'axios';
import './Home.css';
import { useState, useEffect } from 'react';
import {Container, Card, Button, Row, Col} from "react-bootstrap";

const testUrl = 'https://jsonplaceholder.typicode.com/posts/1';
const urlGetService = 'https://api-candidate.workforce-staging.com/v1/services';
const Home = () => {
  const [get, setGet] = useState(null);  
    useEffect(()=>{
      axios.get(urlGetService).then((res) => {
        const myData = res.data;
        setGet(myData);
      })
      .catch(error => console.error(`Error : ${error}`));
    },[]);

  
  // function createPost(){
  //   axios.post(testUrl, {
  //     title: "Hello",
  //     body: 'Testttt Post'
  //   })
  //   .then((resPost) => {
  //     getPost(resPost.data);      
  //   })
  // }
  
  if (!get) return null;

    return (
      <Container>
      <Row>
      {get.map((v, k) =>{console.log(v);
        return(          
            <Col md={4} key={k}>
              <Card>
                <Card.Img className='cardImg' src={v.picture}/>
                <Card.Body>
                <Row>
                  <Col md={7}> <Card.Title>{v.name}</Card.Title></Col>
                  <Col md="auto"> <Card.Text>เริ่มต้น ฿ {v.price}</Card.Text></Col>
                </Row>
                </Card.Body>
              </Card>    
            </Col>          
        )
      })};
      </Row>
      </Container>     
     
    )
  };
  
  export default Home;