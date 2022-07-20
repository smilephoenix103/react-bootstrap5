import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Bulb from '../assets/Bulb.png';


function Feature() {
    return (
        <Container className="feature py-5">
            <Row >
                <Col xs={12} sm={12} md={6} lg={3} xl={3} xxl={3}>
                    <div className="d-flex flex-column justify-content-center align-items-center m-3">
                        <div className="bg-secondary rounded-circle d-flex justify-content-center align-items-center img-container">
                            <img alt="imgHome" src={Bulb} className="img-fluid" />
                            {/* <img src="Bulb.png"  alt="Cinque Terre"> */}
                        </div>
                        <div className="h4"><strong>Lorem ipsum</strong></div>
                        <div>Nam in velit malesuada, porta erat a, vestibulum orci. In ac nibh malesuada, volutpat metus ac, laoreet erat.</div>
                    </div>
                </Col>
                <Col xs={12} sm={12} md={6} lg={3} xl={3} xxl={3}>
                    <div className="d-flex flex-column justify-content-center align-items-center m-3">
                        <div className="bg-secondary rounded-circle d-flex justify-content-center align-items-center img-container">
                            <img alt="imgHome" src={Bulb} className="img-fluid" />
                        </div>
                        <div className="h4"><strong>Lorem ipsum</strong></div>
                        <div>Nam in velit malesuada, porta erat a, vestibulum orci. In ac nibh malesuada, volutpat metus ac, laoreet erat.</div>
                    </div>
                </Col>
                <Col xs={12} sm={12} md={6} lg={3} xl={3} xxl={3}>
                    <div className="d-flex flex-column justify-content-center align-items-center m-3">
                        <div className="bg-secondary rounded-circle d-flex justify-content-center align-items-center img-container">
                            <img alt="imgHome" src={Bulb} className="img-fluid" />
                            {/* <img src="Bulb.png"  alt="Cinque Terre"> */}
                        </div>
                        <div className="h4"><strong>Lorem ipsum</strong></div>
                        <div>Nam in velit malesuada, porta erat a, vestibulum orci. In ac nibh malesuada, volutpat metus ac, laoreet erat.</div>
                    </div>
                </Col>
                <Col xs={12} sm={12} md={6} lg={3} xl={3} xxl={3}>
                    <div className="d-flex flex-column justify-content-center align-items-center m-3">
                        <div className="bg-secondary rounded-circle d-flex justify-content-center align-items-center img-container">
                            <img alt="imgHome" src={Bulb} className="img-fluid" />
                            {/* <img src="Bulb.png"  alt="Cinque Terre"> */}
                        </div>
                        <div className="h4"><strong>Lorem ipsum</strong></div>
                        <div>Nam in velit malesuada, porta erat a, vestibulum orci. In ac nibh malesuada, volutpat metus ac, laoreet erat.</div>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default Feature;
