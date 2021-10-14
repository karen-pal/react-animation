import { useReducer,useRef,useState } from 'react';

import { useTick, Text } from '@inlet/react-pixi'

const AnimatedText = () => {
    const reducer = (_, { data }) => data
    const [motion, update] = useReducer(reducer)
    const [strokeThickness, setStrokeThickness] = useState(0);
    const iter = useRef(0)
    const style = {
      fontFamily: 'Arial',
      fontSize: 36,
      fontStyle: 'italic',
      fontWeight: 'bold',
      fill: ['#ffffff', '#00ff99'], // gradient
      stroke: '#4a1850',
      strokeThickness: strokeThickness,
      dropShadow: true,
      dropShadowColor: '#000000',
      dropShadowBlur: 4,
      dropShadowAngle: Math.PI / 6,
      dropShadowDistance: 6,
      wordWrap: true,
      wordWrapWidth: 440
    }
    useTick(delta => {
      const i = (iter.current += 0.05 * delta)
      setStrokeThickness(Math.sin(i)*10)
    })
    return (
      <Text style={style} x={30} y={180} text="Rich text with a lot of options and across multiple lines" 
        {...motion}
      />
    )
}
export default AnimatedText;
