import { Container, Row, Col} from 'react-bootstrap';
import logo from '../pages/img/white-and-black.png'



const AboutComponent = () =>{
    return (
        <Container className='About mb-20 d-flex align-items-center' fluid>
            <Row className='About-content col-12 d-flex justify-content-center m-0'>
                <Col className='d-flex justify-content-center col-12'>
                    <img className='About-SVG align-self-center' src={logo} alt=''/>
                </Col>
                <Col className='col-10 col-sm-11 col-lg-6 d-flex align-items-center justify-content-center' style={{ textAlign: "justify" }}>
                    <p>STKT Beauty and Technology  — STKT Beauty & Technology is a company fueled by a singular mission: revolutionizing the salon industry through our innovative platform, VYLEE.
                    VYLEE serves as a bridge, seamlessly connecting exceptional salon services with discerning customers seeking an empowering beauty experience. At STKT, we envision a thriving beauty ecosystem where both salons and clients flourish.In today's digital age, attracting new clients and streamlining operations are critical to success. That's why we created VYLEE, a comprehensive platform specifically designed to empower salon owners and elevate their businesses.</p>
                </Col>
            </Row>
        </Container>
    )
}

export {AboutComponent};