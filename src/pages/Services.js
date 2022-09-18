import MenuBar from './MenuBar';
import './Services.css';
import { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';
import axios from 'axios';
import {Button, Container} from "react-bootstrap";
import GetToken from './GetToken';

const urlGetService = 'https://api-candidate.workforce-staging.com/v1/services';
const myToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MzIyZDBmMjI0M2MzMmIwMDhiMmYyNGMiLCJpYXQiOjE2NjM0MTA4ODksImV4cCI6MTY2MzQ0Njg4OX0.EY90ZyD0MTyDZS89VQzdCXCJLBK8lqkYBTMapwRU6HE';


function Services () {
  const [serv, setServ] = useState(null);
  const [user, setUser] = useState();
  const params = useParams();

  function getServicesById(myData){
      axios.get(urlGetService + '/' + params._id).then((ss) => {
        myData = ss.data;
        setServ(myData); 
        console.log(myData)
        return myData;
      })
      .catch(error => console.error(`Error : ${error}`));
    };

    axios.defaults.headers.common = {'Authorization': `bearer ${myToken}`}
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
          {/* {console.log(serv.description.replace(/(\r\n|\n|\r)/g,`'` + '<br />' + `'`))} */}
          <Button variant="primary" onClick={() => postOrders()}>จอง</Button>
        </div>
      </Container>
      </>
    )
  };
  
  export default Services;