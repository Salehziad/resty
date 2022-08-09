import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav';
import './header.scss'

function Header() {
  return (
    <>
      <Nav className="justify-content-center" activeKey="/home">
        <Nav.Item>
          <Nav.Link className='nav-title' href="/home">RESTy</Nav.Link>
        </Nav.Item>
      </Nav>
    </>
  );
}

export default Header;