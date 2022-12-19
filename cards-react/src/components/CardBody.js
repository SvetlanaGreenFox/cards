import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function CardBody(props) {
  const { title, text, btnName } = props;
  return (
    <Card.Body>
      <Card.Title>{title}</Card.Title>
      <Card.Text>{text}</Card.Text>
      <Button variant="primary">{btnName}</Button>
    </Card.Body>
  );
}