import { Container, Row, Col } from "react-bootstrap";
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone } from "react-icons/fa";
import './Navbar.css'
import { useTranslation } from "react-i18next";

function Footer() {

  const {t} = useTranslation();

  return (
    <footer className=" py-3 footer">
      <Container>
        <Row className="text-center">
          <Col md={4} className="mb-2 mb-md-0">
            <p className="mb-0">© {new Date().getFullYear()} Ionut Luca. {t('footer.rights')}</p>
          </Col>
          <Col md={4} className="mb-2 mb-md-0">
            <p className="mb-0">
              <FaPhone /> <a href="tel:+46 76 587 90 94" className=" phone" >+46 76 587 90 94</a>               
            </p>
          </Col>
          <Col md={4}>
             <a href="mailto:ic.luca@outlook.com" className="text-light me-3 media-icon"><FaEnvelope size={24} /></a>
            <a href="https://www.linkedin.com/in/ionut-luca-b4938924b/" target="_blank" rel="noopener noreferrer" className="text-light me-3 media-icon">
              <FaLinkedin size={24} />
            </a>
            <a href="https://github.com/IonutLuca86" target="_blank" rel="noopener noreferrer" className="text-light media-icon">
              <FaGithub size={24} />
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
