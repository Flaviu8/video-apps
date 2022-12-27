import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./Navbar.css"
import { SignIn } from './Navbar.style';
import { useNavigate } from 'react-router-dom';
import { magic } from '../../components/library/magic-client'

function NavigationBar(props) {
  const Login = useNavigate()

  const navigateToLogin = () => {
    Login("/login")
  
  }

    const logOut = async () => {
      await magic.user.logout()

    }

  return (
    <>
      <Navbar bg="black" variant="dark">
        <Container>
          <Navbar.Brand >NETFLIX</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/contact">Contact Us</Nav.Link>
          </Nav>
        </Container>
        <SignIn>
           <button onClick={navigateToLogin}>Sign In</button>
           <button onClick={logOut}>Sign Out</button>
        </SignIn>
      </Navbar>
    </>
  );
}

export default NavigationBar;
