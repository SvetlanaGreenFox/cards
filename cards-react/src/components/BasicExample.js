import Card from 'react-bootstrap/Card';

export default function BasicExample(props) {
  return <Card style={{ width: '18rem' }}>{props.children}</Card>;
}