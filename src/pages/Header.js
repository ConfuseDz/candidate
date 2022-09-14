import './Header.css';
import MenuBar from './MenuBar';
import {Link} from "react-router-dom";
import {Nav, Container} from "react-bootstrap";


const Header = () => {
    return (    
        <div className='img-header'>
          <div className='text-header'>
            <p>คำบรรยายต่างๆนานา</p>
            <p className='text-header-sub'>เรามีบริการที่ครบครันครอบคลุม พร้อมที่จะช่วยเหลือคุณใน ทุกๆด้านอย่างที่คุณต้องการ</p>
          </div>
           <MenuBar />          
        </div>
    )
  };
  
  export default Header;