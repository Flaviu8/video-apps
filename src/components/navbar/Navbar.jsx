import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
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
      <Navbar bg="black" expand="lg">
        <Container >
            <Navbar.Brand className="navbar-brand" to='/'>NETFLIX</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav text-light" />
              <Navbar.Collapse id="basic-navbar-nav " >
                <Nav className="me-auto ">
                    <NavLink className="nav-link active text-light" aria-current="page" to="/">Home</NavLink>
                    <NavLink className="nav-link" to="/prices">Prices</NavLink>
                    <NavLink className="nav-link" to="/contact">Contact Us</NavLink>
                  </Nav>
             </Navbar.Collapse>
          </Container>
        <SignIn>
           <button onClick={logOut}>Sign Out</button>
        </SignIn>
      </Navbar>
    </>
  );
}

export default NavigationBar;




