import { useReducer,useRef,useState } from 'react';

import { useTick, Text } from '@inlet/react-pixi'

const AnimatedText = () => {
    const reducer = (_, { data }) => data
    const [motion, update] = useReducer(reducer)
    const [strokeThickness, setStrokeThickness] = useState(0);
    const iter = useRef(0)
    const style = {
      fontFamily: 'Arial',
      fontSize: 200,
      fill:'white',
      fontStyle: 'italic',
      fontWeight: 'bold',
      stroke: '#4a1850',
      strokeThickness: strokeThickness,
      dropShadow: true,
      dropShadowColor: '##1704ff',
      dropShadowBlur: strokeThickness,
      dropShadowAngle: Math.PI / strokeThickness,
      dropShadowDistance: strokeThickness*2,
      wordWrap: true,
      wordWrapWidth: 440
    }
    useTick(delta => {
      const i = (iter.current += 0.05 * delta)
      setStrokeThickness(Math.floor(Math.random()*256)*.01)
    })
    console.log(strokeThickness);
    return (
      <Text style={style} x={30} y={180} text="Inbipeda" 
        {...motion}
      />
    )
}
export default AnimatedText;
