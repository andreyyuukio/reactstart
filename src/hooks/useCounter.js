import { useEffect, useState } from 'react';

export const useCounter = (initialState = 0) => {
  const [count, setCount] = useState(initialState);
 
  useEffect(() => {
    const timerId = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
      
    }, 1000);
    return () => {
      clearInterval(timerId);
    }
  }, []);

  return count;
}

export const useCounterDouble = (initialState = 0) => {
  const [count, setCount] = useState(initialState);
 
  useEffect(() => {
    const timerId = setInterval(() => {
      setCount((prevCount) => prevCount + 2);
      
    }, 500);
    return () => {
      clearInterval(timerId);
    }
  }, []);

  return count;
}
