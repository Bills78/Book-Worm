import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/esm/Col";
import { FaGithub } from 'react-icons/fa';

function Footer() {

return (
  <Container fluid className='footer'>
    <Row>
      <Col sm={4} xl={5}></Col>
      <Col sm={4}>Copyright &copy; Joshua Williams 2021 <a href='https://github.com/Bills78'><FaGithub /></a></Col>
      <Col sm={4}></Col>
    </Row>
  </Container>
  )
}

export default Footer;