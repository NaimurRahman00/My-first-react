import { useState } from "react"

export default function Counter () {

    const [count, setCount] = useState(0);
    function handleIncrement(){
        const increment = count + 1;
        setCount(increment);
    }
    function handleDecrement(){
        const decrement = count - 1;
        setCount(decrement);
    }

    return (
        <div style={{border: '2px solid seaGreen', padding: '1rem'}}>
            <h2>Counter: {count}</h2>
            <button onClick={handleIncrement}>Increment</button>
            <button style={{margin: '10px'}} onClick={handleDecrement}>Decrement</button>
        </div>
    )

}
