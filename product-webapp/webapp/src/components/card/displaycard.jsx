import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function DisplayCard(props) {
  return (
    <Card style={{ width: '18rem',backgroundColor:"white" }}>
      <Card.Body>
        <Card.Title>{props.head}</Card.Title>
        <Card.Text>
         {props.value}
        </Card.Text>

      </Card.Body>
    </Card>
  );
}

export default DisplayCard;