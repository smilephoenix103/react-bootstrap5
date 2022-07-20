import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import ApppleAppStore from '../assets/Apple_App_Store.png';
import Facebook from '../assets/facebook.png';
import GooglePlay from '../assets/Google_Play.png';
import Instergram from '../assets/instergram.png';
import Twitter from '../assets/twitter.png';
import Youtube from '../assets/youtube.png';
import Logo from '../assets/Logo.png';


function Download() {
    return (
        <Container fluid className="download py-5">
            <Row className="px-5">
                <Col xs={12} sm={12} md={12} lg={12} xl={2} xxl={2} className="d-flex flex-column justify-content-center align-items-center my-3">
                    <Row>
                        <Col>
                            <img alt="imgHome" src={Logo} />
                        </Col>
                        <Col>
                            <div className="h3 text-white"> Sodo</div>
                        </Col>
                    </Row>

                    <Row>
                        <Col><img alt="imgHome" src={Facebook} /></Col>
                        <Col><img alt="imgHome" src={Instergram} /></Col>
                        <Col><img alt="imgHome" src={Twitter} /></Col>
                        <Col><img alt="imgHome" src={Youtube} /></Col>
                    </Row>
                </Col>
                <Col xs={12} sm={12} md={12} lg={12} xl={2} xxl={2} className="d-flex flex-column justify-content-center align-items-start text-white my-3">
                    <div className="h6"><strong>Company</strong></div>
                    <div className="h6">About us</div>
                    <div className="h6">Meet the team</div>
                    <div className="h6">Careers</div>
                    <div className="h6">Blog</div>
                </Col>
                <Col xs={12} sm={12} md={12} lg={12} xl={2} xxl={2} className="d-flex flex-column justify-content-center align-items-start text-white my-3">
                    <div className="h6"><strong>Product</strong></div>
                    <div className="h6">Product</div>
                    <div className="h6">Product</div>
                    <div className="h6">Product</div>
                    <div className="h6">Product</div>
                </Col>
                <Col xs={12} sm={12} md={12} lg={12} xl={2} xxl={2} className="d-flex flex-column justify-content-center align-items-start text-white my-3">
                    <div className="h6"><strong>Product</strong></div>
                    <div className="h6">Product</div>
                    <div className="h6">Product</div>
                    <div className="h6">Product</div>
                    <div className="h6">Product</div>
                </Col>
                <Col xs={12} sm={12} md={12} lg={12} xl={2} xxl={2} className="d-flex flex-column justify-content-center align-items-center my-3">
                    <Button variant="white" className="w-100 bg-white" >
                        <img alt="imgHome" src={ApppleAppStore} /> App Store
                    </Button>
                </Col>
                <Col xs={12} sm={12} md={12} lg={12} xl={2} xxl={2} className="d-flex flex-column justify-content-center align-items-center my-3">
                    <Button variant="white" className="w-100 bg-white">
                        <img alt="imgHome" src={GooglePlay} /> Play Store
                    </Button>
                </Col>
            </Row >
        </Container >
    );
}

export default Download;
