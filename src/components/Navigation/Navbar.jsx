import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Navbar.css'
import { Link } from 'react-router-dom';


function NavigationBar() {
  return (
    <Navbar expand="lg"  className="w-100 nav-container">
      <Container fluid >
        <Navbar.Brand as={Link} to="/" className='ms-5 navBtn'>
            <h1 className='text-orange'>
              <span className='text-yellow'>&lt;</span>
              <span className='text-white'>&#33;</span>
               o
               <span className='text-green fst-courier'>&pi;</span>ut Luc
               <span className='text-green'>&#64;</span> 
               <span className='text-yellow'>&gt;</span></h1></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto mx-auto justify-content-center">
            <Nav.Link as={Link} to="/" className='btn btn-outline-secondary text-white navBtn'>Home</Nav.Link>
            <Nav.Link as={Link} to="/about" className='btn btn-outline-secondary text-white navBtn'>About</Nav.Link>
            <Nav.Link as={Link} to="/work" className='btn btn-outline-secondary text-white navBtn'>Work Experience</Nav.Link>
            <Nav.Link as={Link} to="/skills" className='btn btn-outline-secondary text-white navBtn'>Skills and Education</Nav.Link>
            <Nav.Link as={Link} to="/projects" className='btn btn-outline-secondary text-white navBtn'>Projects</Nav.Link>
            <Nav.Link as={Link} to="/contact" className='btn btn-outline-secondary text-white navBtn'>Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;