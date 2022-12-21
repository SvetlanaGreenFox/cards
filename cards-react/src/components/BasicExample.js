import { Card } from 'react-bootstrap';

export default function BasicExample(props) {
  return <Card style={{ width: '18rem' }}>{props.children}</Card>;
}