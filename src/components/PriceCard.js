import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function PriceCard(props) {
    return (
        <Card className={props.title === "Standard" && "bg-primary"}>
            <Card.Body >
                {props.title === "Standard" && (<Button variant="warning" size="sm" className="mb-3">MOST POPULAR</Button>)}
                <Card.Title className="mb-3">{props.title}</Card.Title>
                <Card.Text className="mb-3">
                    <div className="my-3"><span className="h3">£{props.price}</span>/ month</div>
                    <div className="mb-2">✓ Lorem ipsum dolor</div>
                    <div className="mb-2">✓ Lorem ipsum dolor</div>
                    <div className="mb-2">✕  Lorem ipsum dolor</div>
                </Card.Text>
                <Button variant="light" className="w-100">Sign up</Button>
            </Card.Body>
        </Card>
    );
}

export default PriceCard;
