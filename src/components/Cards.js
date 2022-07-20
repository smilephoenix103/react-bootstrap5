import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ImageCard from './ImageCard';

function Cards() {
    return (
        <Container className="cards py-5">
            <Row className="d-flex justify-content-center align-items-center">
                <Col xs={12} sm={12} md={12} lg={4} xl={4} xxl={4} className="p-3">
                    <ImageCard className="m-5" />
                </Col>
                <Col xs={12} sm={12} md={12} lg={4} xl={4} xxl={4} className="p-3">
                    <ImageCard className="m-5" />
                </Col>
                <Col xs={12} sm={12} md={12} lg={4} xl={4} xxl={4} className="p-3">
                    <ImageCard className="m-5" />
                </Col>
            </Row>
        </Container>
    );
}

export default Cards;
