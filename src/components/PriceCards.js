import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import PriceCard from './PriceCard';

function PriceCards() {
    return (
        <Container className="price py-5">
            <Row className="d-flex justify-content-center align-items-center">
                <Col xs={12} sm={12} md={12} lg={4} xl={4} xxl={4} className="p-3">
                    <PriceCard title="Free" price="0" />
                </Col>
                <Col xs={12} sm={12} md={12} lg={4} xl={4} xxl={4} className="p-3">
                    <PriceCard title="Standard" price="9" />
                </Col>
                <Col xs={12} sm={12} md={12} lg={4} xl={4} xxl={4} className="p-3">
                    <PriceCard title="Enterprise" price="16" />
                </Col>
            </Row>
        </Container>
    );
}

export default PriceCards;
