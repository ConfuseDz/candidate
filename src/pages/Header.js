import './Header.css';
import {Link} from "react-router-dom";
import {Nav, Container} from "react-bootstrap";


const Header = () => {
    return (    
        <div className='img-header'>
          <div className='text-header'>
            <p>คำบรรยายต่างๆนานา</p>
            <p className='text-header-sub'>เรามีบริการที่ครบครันครอบคลุม พร้อมที่จะช่วยเหลือคุณใน ทุกๆด้านอย่างที่คุณต้องการ</p>
          </div>
            <Nav className="justify-content-end menubar">            
              <Nav.Link as={Link} to={'/Services'}>บริการ</Nav.Link>
              <Nav.Link as={Link} to={'/Orders'}>รายการ</Nav.Link>          
            </Nav>          
        </div>
    )
  };
  
  export default Header;