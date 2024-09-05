import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {LinkContainer} from 'react-router-bootstrap'
import { FaShoppingCart, FaUser } from 'react-icons/fa';

function Header() {
  return (
    <Navbar expand="lg" bg="dark" data-bs-theme="dark">
      <Container>
      <LinkContainer to='/'>
            <Navbar.Brand>TulioShop</Navbar.Brand>
          </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end'>
          <Nav>
            <LinkContainer to='/cart'>
              <Nav.Link>
                <FaShoppingCart /> Cart
              </Nav.Link>
            </LinkContainer>
            <LinkContainer to='/login'>
              <Nav.Link href='/login'>
                <FaUser /> Sign In
              </Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;