import Container from 'react-bootstrap/Container';
import Logos1 from '../assets/Logos1.png';
import Logos2 from '../assets/Logos2.png';


function Logos() {
    return (
        <Container className="logos py-5">
            <h5 className="d-none d-lg-block d-xl-none">Trusted by</h5>
            <h5 className="d-none d-xl-block d-xxl-none">Trusted by</h5>
            <h5 className="d-none d-xxl-block">Trusted by</h5>
            <h5 className="d-lg-none w-100 text-center">Trusted by</h5>
            <img alt="imgHome" src={Logos1} className="img-fluid d-none d-lg-block d-xl-none w-100" />
            <img alt="imgHome" src={Logos1} className="img-fluid d-none d-xl-block d-xxl-none w-100" />
            <img alt="imgHome" src={Logos1} className="img-fluid d-none d-xxl-block w-100" />
            <img alt="imgHome" src={Logos2} className="img-fluid d-lg-none w-100" />
        </Container>
    );
}

export default Logos;
