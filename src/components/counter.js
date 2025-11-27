import { useState } from 'react';
import Button from './module/button';

const Counter = () => {

    const [count, setCount] = useState(0);
    
    const handleIncrement = () => {
        console.log("Increment clicked");
        setCount(count + 1)
    }

    const handleDecrement = () => {
        console.log("Decrement clicked");
        setCount(count - 1)
    }

    return (
        <>
            <div>Count: {count}</div>
            <Button onClick={handleIncrement}>Increment</Button>
            <Button onClick={handleDecrement}>Decrement</Button>
        </>
    )
}

export default Counter;