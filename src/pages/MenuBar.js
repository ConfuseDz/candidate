import './MenuBar.css';
import {Link} from "react-router-dom";
import {Nav, Container} from "react-bootstrap";


const MenuBar = () => {
    return (
            <Nav className="justify-content-end menubar">            
              <Nav.Link as={Link} to={'/Services'}>บริการ</Nav.Link>
              <Nav.Link as={Link} to={'/Orders'}>รายการ</Nav.Link>          
            </Nav>
    )
  };
  
  export default MenuBar;