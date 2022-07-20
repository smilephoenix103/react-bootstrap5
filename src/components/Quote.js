import Container from 'react-bootstrap/Container';
import Photo from '../assets/photo.jpg';


function Quote() {
    return (
        <Container className="quote py-5">
            <div className="panel">
                <h1>“Lorem ipsum dolor sit amet, consectetur adipiscing elit.”</h1>
                <img alt="imgHome" src={Photo} className="rounded-circle" />
                <div><strong>Jennifer Rowlands</strong></div>
                <div>Chief Design Office, uxtoast</div>
            </div>
        </Container>
    );
}

export default Quote;
