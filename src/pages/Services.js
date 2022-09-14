import MenuBar from './MenuBar';
import { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';
import axios from 'axios';
import {Container} from "react-bootstrap";

const urlGetService = 'https://api-candidate.workforce-staging.com/v1/services';

function Services () {
  const [serv, setServ] = useState(null);
  const params = useParams();
  const myData = '';
  function getServicesById(myData){
      axios.get(urlGetService + '/' + params._id).then((ss) => {
        myData = ss.data;
        setServ(myData); 
        console.log(myData)
        return myData;       
        
      })

      .catch(error => console.error(`Error : ${error}`));
    };
   
       

    useEffect(() =>{      
      getServicesById();
    },[]);

    // var desc = serv.description;
    // desc.split('\n').join(<br />);
    console.log(myData)
    
    if (!serv) return null;

    return (
      <>
      <MenuBar />
      <Container>
        <div>
         <h1>{serv.name}</h1>
         <h2>{serv.price}</h2>
        </div>
        <div>          
          {serv.description}
          {/* {console.log(serv.description.replace(/(\r\n|\n|\r)/g,`'` + '<br />' + `'`))} */}
        </div>
      </Container>
      </>
    )
  };
  
  export default Services;