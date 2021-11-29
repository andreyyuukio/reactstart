import React from 'react'
import {useRoots} from '../hooks/useRoots'

const Equation = () => {
const equation = useRoots();

return(
    <div className="equation">
        <h2>Квадратое уравнение, введите аргументы уравнения</h2>       
       <p>{equation}</p> 
    </div>
)
}
export default Equation;