import {useState } from 'react';

export const useRoots = (initialState = 0) => {
    const [savedValueFirst, setValueFirst] = useState(initialState);
    const [savedValueSecond, setValueSecond] = useState(initialState);
    const [savedValueThird, setValueThird] = useState(initialState);
    const argumentFirst = <input onChange={(event) => setValueFirst(event.target.value)} value={savedValueFirst} />
    const argumentSecond = <input onChange={(event) => setValueSecond(event.target.value)} value={savedValueSecond} />
    const argumentThird = <input onChange={(event) => setValueThird(event.target.value)} value={savedValueThird} />
    const descriminant = (Math.pow(savedValueSecond, 2) - (4 * savedValueFirst*savedValueThird))
    
    const rootFirst = ((-savedValueSecond + Math.sqrt(descriminant)) / (2*savedValueFirst)).toFixed(4)
    const rootSecond = ((-savedValueSecond - Math.sqrt(descriminant)) / (2*savedValueFirst)).toFixed(4)
  
    return(
        <div>           
            <p>{argumentFirst}X^2 +/- {argumentSecond}X +/- {argumentThird} = 0</p>           
            <p>descriminant = {descriminant}</p>            
            <p>Первый корернь уравнения  = {rootFirst}</p>
            <p>Второй корень уравнения = {rootSecond}</p>
        </div>
    )
}