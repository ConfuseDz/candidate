import React,{ useState, useEffect, createContext } from 'react';
import './App.css';
import {BrowserRouter,  Routes,  Route} from "react-router-dom";
import axios from 'axios';
import Header from './pages/Header';
import Home from './pages/Home';
import Orders from './pages/Orders';
import Services from './pages/Services';
import NoPage from './pages/NoPage';
import GetToken from './pages/GetToken';


const client = axios.create({
  baseURL:'https://api-candidate.workforce-staging.com/v1'
});
export const DataContext =  createContext();

function App() {
  const [userToken, setUserToken] = useState([]);


  useEffect(()=>{     
    async function getToken(){
      await client.post('/auth/signin', 
      { "username": "seekster11", "password": "seekster11" })
      .then((resToken) =>{
        console.log(resToken.data.accessToken)
        setUserToken(resToken.data.accessToken)
      })
    }   
    getToken();   
    // getOrders();
  },[]);


  return (
    <DataContext.Provider value={userToken}>
      <BrowserRouter>            
        <Routes>
            <Route index element={<Home />}/>
            <Route path="Orders" element={<Orders />}/>
            <Route path="Services/:_id" element={<Services />} />
            <Route path="GetToken" element={<GetToken />}/>
            {/* <Route path="tokenContext" element={<tokenContext />}/> */}
            <Route path='*' element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </DataContext.Provider>
    
  )
}

export default App;
