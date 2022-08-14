import { Container, Row, Col } from "react-bootstrap";
// import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import navIcon4 from '../assets/img/nav-icon4.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './footer.css'
export default function  Footer  ()  {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          {/* <MailchimpForm /> */}
          <Col className='footer-title' size={12} sm={6}>
             RESTy
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
            <a target='_blank' href="https://www.linkedin.com/in/saleh-ziad-6b40a1214" rel="noreferrer"><img src={navIcon1} alt="" /></a>
              <a target='_blank' href='https://www.facebook.com/profile.php?id=100005955198338' rel="noreferrer"><img src={navIcon2} alt="" /></a>
              <a target='_blank' href='https://instagram.com/saleh.dalalshh?igshid=YmMyMTA2M2Y=' rel="noreferrer"><img src={navIcon3} alt="" /></a>
              <a target='_blank' href='https://instagram.com/saleh.dalalshh?igshid=YmMyMTA2M2Y=' rel="noreferrer"><img src={navIcon4} alt="" /></a>
            </div>
            <p>Copyright 2022. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
