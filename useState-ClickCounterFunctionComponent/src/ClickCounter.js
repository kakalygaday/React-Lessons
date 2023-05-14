import React from 'react'

export default function ClickCounter() {
    const [count, setCount] = React.useState(0)

    const handleClickButton = () => {
        setCount(count + 1);
    };
  return (
    <div>
        <p>ClickCounter is equal to {count}</p>
        <button onClick={handleClickButton}>Click it!</button>
        </div>
  )
}
