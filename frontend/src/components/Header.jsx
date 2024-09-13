import { Badge, Container, Nav, Navbar } from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap'
import { FaShoppingCart, FaUser } from 'react-icons/fa';
import { useSelector } from 'react-redux';

function Header() {
  const {cartItems} = useSelector((state) => state.cart)

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

                {cartItems.length > 0 && (
                  <Badge pill bg='success' style={{marginLeft: '5px'}}>
                    {cartItems.reduce((a, c) => a + c.qty, 0)}
                  </Badge>
                )}
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