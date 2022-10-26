import MenuBar from './MenuBar';
import './Services.css';
import { useEffect, useState, useContext } from 'react';
import {useParams, useLocation} from 'react-router-dom';
import axios from 'axios';
import {Button, Container} from "react-bootstrap";
import {Mytoken} from '../App';
import {ServiceList} from '../App';

// const urlGetService = 'https://api-candidate.workforce-staging.com/v1/services';
const client = axios.create({
  baseURL:'https://api-candidate.workforce-staging.com/v1'
});


function Services (props) {
  const myToken = useContext(Mytoken)
  const serviceList = useContext(ServiceList);
  const [serv, setServ] = useState(null);  
  const location = useLocation();  

  console.log(serviceList) 
    
    axios.defaults.headers.common = {'Authorization': `Bearer ${myToken}`}
    const config = {
        headers: { Authorization: `Bearer ${myToken}` }
    };
    const bodyParameters = {key: myToken};      
    
    const postOrders = async(serviceId) =>{
      console.log('accept' + '\n' + serviceId)
        //  axios.post( 
        //       `https://api-candidate.workforce-staging.com/v1/services/${serv._id}/booking`,
        //       bodyParameters,
        //       config
        //     ).then(console.log)
        //     .catch(error => console.error(`Error: ${error}`));            
      };

      async function getServicesById(){
        const servId = location.state.id;
        // client.get(`/services/` + params._id).then((ss) => {
        await client.get(`/services/` + servId).then((ss) => {          
          setServ(ss.data); 
          console.log(ss.data)
        })
        .catch(error => console.error(`Error : ${error}`));
      };
    
      
    useEffect(() =>{ 
      if(location.state != null){
        getServicesById();  
      }             
      
    },[]);

    const handleClick = (event, param) => {
      console.log(event);
      console.log(param);
    };
   
    
    // if (!serv) return (
    // <div>Error</div>
    // );


    return (
      <>
      <MenuBar />
      {!serv ? (
        <Container>
          {serviceList.map((val, k) => {
            return(
              <div key={k}>
                <div className='mt-5'>         
                  <h1>{val.name}</h1>
                  <h2>฿ {val.price}</h2>
                </div>
                <div className='preline'>          
                  {val.description}  
                </div>
                <Button variant="primary" size="lg" className='mt-5' onClick={serviceId => postOrders(val._id)}>จองบริการ</Button>
              </div>              
            )            
          })}          
        </Container>      
      ) : (
        <Container>
          <div className='mt-5'>         
            <h1>{serv.name}</h1>
            <h2>฿ {serv.price}</h2>
          </div>
          <div className='preline'>          
            {serv.description}  
          </div>
          <Button variant="primary" size="lg" className='mt-5' onClick={serviceId => postOrders(serv._id)}>จองบริการ</Button>
      </Container>

      )}  
      
      </>
    )
  };
  
  export default Services;