import { Container, Row, Col} from 'react-bootstrap';
import '../css/Footer.css';
import { CustomLink } from './CustomLink';
import {InstagramLogo} from "phosphor-react";
import logo from '../pages/img/white-and-black.png';

const Footer = () =>{
    return (
        <>
            <Container className='Footer' fluid>
                <Row className='d-flex justify-content-center  h-20'>
                    <Col className='col-12 col-md-3 d-flex align-items-center justify-content-center'>
                        <img className='Footer-SVG align-self-center' src={logo} alt=''/>  
                    </Col>
                    <Col className='Footer-Menu col-6 col-md-3' >
                        <h4>Explore More!</h4>
                        <ul>
                            <li><CustomLink to='/'>Home</CustomLink></li>
                            <li><CustomLink to='/about'>About Us</CustomLink></li>
                            <li><CustomLink to='/service' >Services</CustomLink></li>
                            <li><CustomLink to='posts/' >Blogs</CustomLink></li>
                            <li><CustomLink to='posts/' >Login/SignUp</CustomLink></li>
                            <li><CustomLink to='about'>Contact Us</CustomLink></li>
                        </ul>

                    </Col>
                    <Col className='Footer-Head col-6 col-md-3'>
                        <h4>STKT BEAUTY AND TECHNOLOGY <br/>Private Limited</h4>
                        <p>Address:</p>
                        <p>FF-229 Ansal Corporate Plaza, Palam Vihar, Gurgaon.</p>
                        <p>Mobile:</p>
                        <p>9319375444</p>
                        <p>Email:</p>
                        <p>support@vyleesalon.in</p>

                        
                    </Col>

                    <Col className='Footer-Subscribe col-6 col-md-3'>
                       <h4>Follow us on Instagram!</h4>
                       <Col className='d-flex text-align-center justify-content-center justify-content-md-start align-content-center'>
                            <InstagramLogo size={32} color={"white"}> 
                            </InstagramLogo>
                            <a href="https://www.instagram.com/vylee.in/" className='align-self-center' target="_blank">Vylee.in</a>
                       </Col>
                    </Col>
                </Row>
                <Row>
                    <Col className='text-center' style={{color: "white"}}>© STKT Beauty and Technology—2024. All rights reserved</Col>
                </Row>

            </Container>
        </>
    )
}

export {Footer};