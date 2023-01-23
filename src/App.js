import Container from './components/Container/Container';
import Timer from './components/Timer/Timer';
import Button from './components/Button/Button';

function App() {
  return (
    <Container>
      <Timer />
      <Button>Start</Button>
      <Button>Stop</Button>
      <Button>Reset</Button>
    </Container>
  );
}

export default App;
