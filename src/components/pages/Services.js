import MenuBar from '../header/menuBar';
import '../../style/Services.css';
import { useEffect, useState, useContext } from 'react';
import {useLocation} from 'react-router-dom';
import axios from 'axios';
import {Button, Container} from "react-bootstrap";
import { Mytoken } from '../../App';
import { ServiceList } from '../../App';

// const urlGetService = 'https://api-candidate.workforce-staging.com/v1/services';
const client = axios.create({
  baseURL:'https://api-candidate.workforce-staging.com/v1'
});


function Services () {
  const myToken = useContext(Mytoken)
  const serviceList = useContext(ServiceList);
  const [serv, setServ] = useState(null);  
  const location = useLocation();  
    
    axios.defaults.headers.common = {'Authorization': `Bearer ${myToken}`}
    const config = {headers: { Authorization: `Bearer ${myToken}` }};
  
    
    const postOrders = async(serviceId) =>{     
      axios.post(`https://api-candidate.workforce-staging.com/v1/services/${serviceId}/booking`, config)
        .then(console.log)
        .catch(error => console.error(`Error: ${error}`));
      };

      async function getServicesById(){
        const servId = location.state.id;        
        await client.get(`/services/` + servId).then((ss) => {          
          setServ(ss.data);          
        })
        .catch(error => console.error(`Error : ${error}`));
      };
    
      
    useEffect(() =>{ 
      if(location.state != null){
        getServicesById();  
      }             
      
    },[]);   
    
    if (!serviceList) return (
    <div>Error</div>
    );


    return (
      <>
      <MenuBar />
      {!serv ? (
        <Container>
          {serviceList.map((val, k) => {
            return(
              <div key={k}>
                <div className='mt-5 mb-4'>         
                  <h1>{val.name}</h1>
                  <h2 className='pt-3'>฿ {val.price.toLocaleString()}</h2>
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
          <div className='mt-5 mb-4'>         
            <h1>{serv.name}</h1>
            <h2 className='pt-3'>฿ {serv.price.toLocaleString()}</h2>
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