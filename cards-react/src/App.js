import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import BasicExample from './components/BasicExample';
import CardImg from './components/CardImg';
import CardBody from './components/CardBody';

const img = {
  variant: 'top',
  src: 'https://telegrator.ru/wp-content/uploads/2021/05/chat_avatar-136.jpg',
};

const bodyDescription = {
  title: 'Cute cat',
  text: 'All people love cats',
  btnName: 'I agreee',
};

function App() {
  return (
    <BasicExample>
      <CardImg {...img} />
      <CardBody {...bodyDescription} />
    </BasicExample>
  );
}

export default App;
