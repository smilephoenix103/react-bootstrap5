import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Image from '../assets/Image.png';

function ImageCard() {
    return (
        <Card>
            <Card.Img variant="top" src={Image} className="p-3 position-relative"></Card.Img>
            <Button variant="warning" size="sm" className="new">New</Button>
            <Card.Body>
                <Card.Title>Lorem ipsum</Card.Title>
                <Card.Text>
                    Nam in velit malesuada, porta erat a, vestibulum orci. In ac nibh malesuada, volutpat metus ac, laoreet erat.
                </Card.Text>
                <Button variant="primary" className="text-white w-100">Button</Button>
            </Card.Body>
        </Card>
    );
}

export default ImageCard;
