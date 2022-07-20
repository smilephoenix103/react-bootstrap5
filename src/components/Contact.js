import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


function Contact() {
    return (
        <Container className="contact py-5">
            {/* <div className=" bg-primary " style=" width: 792px; border-radius: 16px"> */}
            <div className="contact-panel">
                <div className="h3">Contact us</div>
                <Form className="mt-3 p-5 rounded-4 form-color text-white">
                    <Row>
                        <Col>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>First Name</Form.Label>
                                <Form.Control type="text" placeholder="Alex" />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Last Name</Form.Label>
                                <Form.Control type="text" placeholder="Bloggs" />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="alex.bloggs@email.com" />
                    </Form.Group>
                    <Form.Group controlId="formBasicTextarea">
                        <Form.Label>Your message</Form.Label>
                        <Form.Control as="textarea" rows="3" name="address" placeholder="Please enter your message" />
                    </Form.Group>

                    <div className="d-flex justify-content-end">
                        <Button variant="primary" type="submit" className="mt-3">
                            Submit message
                        </Button>
                    </div>
                </Form>
            </div>
        </Container>
    );
}

export default Contact;
