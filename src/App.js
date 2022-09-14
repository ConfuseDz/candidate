import './App.css';
import {BrowserRouter,  Routes,  Route} from "react-router-dom";
import Header from './pages/Header';
import Home from './pages/Home';
import Orders from './pages/Orders';
import Services from './pages/Services';
import NoPage from './pages/NoPage';


function App() {
  return (
    <BrowserRouter>            
      <Routes>
          <Route index element={<Home />}/>
          <Route path="Orders" element={<Orders />}/>
          <Route path="Services/:_id" element={<Services />} />
          <Route path='*' element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
