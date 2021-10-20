
import { useReducer, useRef, useState, useCallback } from "react";

import { useTick, Graphics, Stage } from "@inlet/react-pixi";

const Circles = () => {
  const reducer = (_, { data }) => data;
  const [motion, update] = useReducer(reducer);
  const [noise, setNoise] = useState(0);
  const [noise2, setNoise2] = useState(0);
  const [alpha, setAlpha] = useState(0);
  const [time, setTime] = useState(0);
  const [alpha2, setAlpha2] = useState(0);

  const iter = useRef(0);
  useTick((delta) => {
    const i = (iter.current += 0.05 * delta);
    setTime(Math.sin(i*.3)*5)
    setNoise(Math.floor(Math.random()*10));
    setNoise2(Math.floor(Math.random()*20));
    setAlpha(1/Math.floor(Math.random()*10)*.8);
    setAlpha2(1/Math.floor(Math.random()*13)*.8);
  });
  const draw = useCallback(g =>{
	  g.clear()
          g.beginFill(0xfffff,alpha )
	  g.drawCircle(470+noise2+time, 110+noise,200 )
          g.beginFill(0xf07fe,alpha2 )
	  g.drawCircle(440+noise, 110+time,200 )
          g.beginFill(0xa0d9b2,alpha )
	  g.drawCircle(470+noise+time, 80+noise,200) //x, y, radius
          g.beginFill(0xffffff,alpha2 )
	  g.drawCircle(460+time, 100,130+noise )
	  g.drawCircle(460-Math.sin(noise)*20, 100+Math.sin(noise)*20+time,120+noise )
	  g.endFill()
	  
}
  )
  return(
      <Graphics draw={draw} />
  )
};
export default Circles;
