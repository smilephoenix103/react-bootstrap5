import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Image from '../assets/Image.png';


function Splite() {
    return (
        <Container className="splite py-5">
            <Row className="d-flex justify-content-center align-items-center">
                <Col xs={12} sm={12} md={12} lg={6} xl={6} xxl={6}>
                    <h1>Lorem ipsum dolor sit amet.</h1>
                    <div>Praesent placerat ipsum nec mi maximus, vel cursus mauris cursus. Vivamus cursus ante eget orci egestas malesuada.</div>
                    <Row>
                        <Col xs={12} sm={12} md={12} lg={4} xl={4} xxl={4}>
                            <Button variant="primary" className='text-white w-100 mt-3'>Primary action</Button>
                        </Col>
                        <Col xs={12} sm={12} md={12} lg={6} xl={6} xxl={6}>
                            <Button variant="light" className='my-3 w-100'>Secondary action</Button>
                        </Col>
                    </Row>
                </Col>
                <Col xs={12} sm={12} md={12} lg={6} xl={6} xxl={6}>
                    <img alt="imgHome" src={Image} className="img-fluid w-100" />
                </Col>
            </Row>
        </Container>
    );
}

export default Splite;
