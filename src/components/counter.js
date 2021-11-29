 
import { useCounter } from '../hooks/useCounter';
import {useCounterDouble} from '../hooks/useCounter'
const FunctionalCounter = () => {  

  const count = useCounter();
  const count2 = useCounterDouble(2);

  return (
    <div>
      Hello I'm functions Counter -
      <span className="counter">{count}, {count2}</span>
    
     
    </div>
  );
};

export default FunctionalCounter;
