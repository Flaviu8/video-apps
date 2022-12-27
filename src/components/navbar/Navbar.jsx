import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./Navbar.css"
import { SignIn } from './Navbar.style';
import { useNavigate } from 'react-router-dom';
import { magic } from '../../components/library/magic-client'
import { NavLink } from 'react-router-dom';

function NavigationBar(props) {
  const BackToLogin = useNavigate()

    const logOut = async () => {
      await magic.user.logout()
      BackToLogin("/login")
    }


  return (
    <>
      <Navbar bg="black" collapseOnSelect expand="lg" variant="dark">
        <Container>
          <Navbar.Brand >NETFLIX</Navbar.Brand>
          <Nav className="me-auto">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/contact">Contact Us</NavLink>
            <NavLink to="/Prices">Prices</NavLink>
          </Nav>
        </Container>
        <SignIn>
           <button onClick={logOut}>Sign Out</button>
        </SignIn>
      </Navbar>
    </>
  );
}

export default NavigationBar;
