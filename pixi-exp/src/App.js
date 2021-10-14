import './App.css';
import { Sprite, Text, Stage, Container } from '@inlet/react-pixi'
import AnimatedText from './animatedText.js';


const BasicText = () => (
  <Text x={30} y={90} text="Basic text in pixi" />
)


const App = () => (
    <Stage width={1500} height={1050} options={{ backgroundAlpha: 0 }}>
        <BasicText/>
      <Container x={150} y={150}>
        <AnimatedText />
      </Container>
    </Stage>
)

export default App;
