import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../assets/Logo.png';
import Button from 'react-bootstrap/Button';

function Header() {
    return (
        <Navbar collapseOnSelect expand="lg" bg="wight" variant="white" >
            <Container>
                <Navbar.Brand href="#home">
                    <img alt="imgHome" src={Logo} />{' '}
                    <span className="text-dark"><strong>  Sodo</strong></span>
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#features">About us</Nav.Link>
                        <Nav.Link href="#pricing">Download</Nav.Link>
                        <Nav.Link href="#pricing">Contact</Nav.Link>
                    </Nav>
                    <Nav>
                        <Button variant="light" className="text-primary m-2">Login</Button>{' '}
                        <Button variant="primary" className="text-white m-2">Primary action</Button>{' '}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;
