import React,{useState} from 'react'

const UseStateHook = () => {

    const [count, setCount] = useState(0)

   const handleDec = () => {
        if (count > 0) {
            setCount(count-1)
        }
    }

   const handelInc = () => {
        setCount(count+1)
    }

    return (
        <>
            <h1>useState Hook</h1>
            <h2>count</h2>
            <h2>{count}</h2>
            <button onClick={handleDec}>-</button>
            <button onClick={handelInc}>+</button>

        </>
    )
}

export default UseStateHook