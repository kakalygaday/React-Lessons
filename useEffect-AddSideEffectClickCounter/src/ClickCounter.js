import React, { useEffect, useState } from 'react'

export default function ClickCounter({onCounterChange}) {
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        onCounterChange(counter);
    }, [counter, onCounterChange]);

    const handleClickButton = () => {
        setCounter(counter + 1);
    }
  return (
    <div>
        <p>Counter is pressed {counter} times</p>
        <button onClick={handleClickButton}>Click me!</button>
    </div>
  )
}
