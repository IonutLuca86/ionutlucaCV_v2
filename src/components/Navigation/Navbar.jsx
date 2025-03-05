import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Navbar.css'
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { LiaFlagUsaSolid } from "react-icons/lia";
import { CgSweden } from "react-icons/cg";



function NavigationBar({lang,setLang}) {

  const {t} = useTranslation();

  const Language = () => { 
    return (
      lang === 'sv' ? 
        <button onClick={() => setLang('en')} className='btn btn-outline-info navBtn fs-sm'><LiaFlagUsaSolid/> English</button> 
        : 
        <button onClick={() => setLang('sv')} className='btn btn-outline-info navBtn fs-sm'><CgSweden/> Svenska</button>  
    );
  };
  

  return (
    <Navbar expand="lg"  className="w-100 nav-container d-flex align-items-center justify-content-between">
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
            <Nav.Link as={Link} to="/" className='btn btn-outline-secondary text-white navBtn'>{t('navbar.home')}</Nav.Link>
            <Nav.Link as={Link} to="/about" className='btn btn-outline-secondary text-white navBtn'>{t('navbar.about')}</Nav.Link>
            <Nav.Link as={Link} to="/work" className='btn btn-outline-secondary text-white navBtn'>{t('navbar.work')}</Nav.Link>
            <Nav.Link as={Link} to="/skills" className='btn btn-outline-secondary text-white navBtn'>{t('navbar.skills')}</Nav.Link>
            <Nav.Link as={Link} to="/projects" className='btn btn-outline-secondary text-white navBtn'>{t('navbar.projects')}</Nav.Link>
            <Nav.Link as={Link} to="/contact" className='btn btn-outline-secondary text-white navBtn'>{t('navbar.contact')}</Nav.Link>
          </Nav>
        </Navbar.Collapse> 
        <div className='ms-auto'><Language/> </div>  
        
      </Container>
    </Navbar>
  );
}

export default NavigationBar;