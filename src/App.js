import React,{ useState, useEffect, createContext } from 'react';
import './App.css';
import {BrowserRouter,  Routes,  Route} from "react-router-dom";
import axios from 'axios';
import Home from './pages/Home';
import Orders from './pages/Orders';
import Services from './pages/Services';
import NoPage from './pages/NoPage';
import GetToken from './pages/GetToken';

const client = axios.create({
  baseURL:'https://api-candidate.workforce-staging.com/v1'
});
export const Mytoken =  createContext();
export const ServiceList = createContext();

function App() {
  const [userToken, setUserToken] = useState([]);
  const [getData, setGetData] = useState(); 

  useEffect(()=>{     
    async function getToken(){
      await client.post('/auth/signin', 
      { "username": "seekster11", "password": "seekster11" })
      .then((resToken) =>{        
        setUserToken(resToken.data.accessToken)
      })
    };

    async function getPost(){
      await client.get('/services').then((res) => {        
        setGetData(res.data);       
      })
    };

    getPost(); 
    getToken();   
    
  },[]);


  return (   
    <ServiceList.Provider value={getData}>
    <Mytoken.Provider value={userToken} >    
      <BrowserRouter>            
        <Routes>
            <Route index element={<Home />}/>
            <Route path="Orders" element={<Orders />}/>
            <Route path="services" element={<Services />} />
            {/* <Route path="services/:_id" element={<Services />} /> */}
            <Route path="GetToken" element={<GetToken />}/>
            {/* <Route path="tokenContext" element={<tokenContext />}/> */}
            <Route path='*' element={<NoPage />} />
        </Routes>
      </BrowserRouter>    
    </Mytoken.Provider>
    </ServiceList.Provider>
  )
}

export default App;
