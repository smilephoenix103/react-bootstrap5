import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from '../assets/Image.png';


function ContentImage(props) {
    return (
        <Container className="content-image py-5">
            {props.type === "true" ? (
                <Row className="d-flex justify-content-center align-items-center">
                    <Col xs={12} sm={12} md={12} lg={6} xl={6} xxl={6}>
                        <div className="h1 m-3">Lorem ipsum dolor sit amet.</div>
                        <div className="mb-3">Praesent placerat ipsum nec mi maximus, vel cursus mauris cursus. Vivamus cursus ante eget orci egestas malesuada.</div>
                    </Col>
                    <Col xs={12} sm={12} md={12} lg={6} xl={6} xxl={6}>
                        <img alt="imgHome" src={Image} className="img-fluid w-100" />
                    </Col>
                </Row>

            ) : (
                <Row className="d-flex justify-content-center align-items-center">
                    <Col xs={12} sm={12} md={12} lg={6} xl={6} xxl={6}>
                        <img alt="imgHome" src={Image} className="img-fluid w-100" />
                    </Col>

                    <Col xs={12} sm={12} md={12} lg={6} xl={6} xxl={6}>
                        <div className="h1 m-3">Lorem ipsum dolor sit amet.</div>
                        <div>Praesent placerat ipsum nec mi maximus, vel cursus mauris cursus. Vivamus cursus ante eget orci egestas malesuada.</div>
                    </Col>
                </Row>
            )}
        </Container>
    );
}

export default ContentImage;
