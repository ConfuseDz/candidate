import MenuBar from './MenuBar';
import './Services.css';
import { useEffect, useState, useContext } from 'react';
import {useParams} from 'react-router-dom';
import axios from 'axios';
import {Button, Container} from "react-bootstrap";
import {DataContext} from '../App';


// const urlGetService = 'https://api-candidate.workforce-staging.com/v1/services';
const client = axios.create({
  baseURL:'https://api-candidate.workforce-staging.com/v1'
});


function Services () {
  const myToken = useContext(DataContext);
  const [serv, setServ] = useState(null);
  const [user, setUser] = useState();
  const params = useParams();

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

  function getServicesById(myData){
      client.get(`/services/` + params._id).then((ss) => {
        myData = ss.data;
        setServ(myData); 
        console.log(myData)
        return myData;
      })
      .catch(error => console.error(`Error : ${error}`));
    };

    axios.defaults.headers.common = {'Authorization': `Bearer ${myToken}`}
    const config = {
        headers: { Authorization: `Bearer ${myToken}` }
    };
    const bodyParameters = {key: myToken};      
    
    const postOrders = async() =>{
         axios.post( 
              `https://api-candidate.workforce-staging.com/v1/services/${serv._id}/booking`,
              bodyParameters,
              config
            ).then(console.log)
            .catch(error => console.error(`Error: ${error}`));            
      };
      // console.log(this.state.userToken)
       

    useEffect(() =>{      
      getServicesById();
      // getposttoken();
    },[]);
   
    
    if (!serv) return null;

    return (
      <>
      <MenuBar />
      <Container>
        <div>
         <h1>{serv.name}</h1>
         <h2>{serv.price}</h2>
        </div>
        <div className='preline'>          
          {serv.description}         
          <Button variant="primary" onClick={() => postOrders()}>จอง</Button>
        </div>
      </Container>
      </>
    )
  };
  
  export default Services;