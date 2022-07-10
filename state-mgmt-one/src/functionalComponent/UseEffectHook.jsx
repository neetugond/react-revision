import React, { useState, useEffect } from 'react'
// after render componentdidMount and componentdidUpdate replace by useEffect in functional component

const UseEffectHook = () => {
    const [data, setData] = useState("elder sister")
    const [name, setName] = useState("Priyanka")
    const [increment, setIncrement] = useState(0);
    const [decrement, setDecrement] = useState(0);

    useEffect(() => {
console.log('thank you')
    },[increment])
    // if array of dependencies empty then only once thank you will called - componentDidMount(mounting phase)
    // if no array of dependencies everytime called for the useState 
    // if any data pass in array of dependencies than will called only for that data in all lifecycle method - componentDidMount, componentDidUpdate and componentDidUnmount


    const changeData = () => {
        setData("younger sister");
        setName("Neetu")

    }
    const handleDec = () => {
       
            setDecrement(decrement-1)
      
    }

   const handelInc = () => {
        setIncrement(increment+1)
    }


    return (
        <>
            <h1>useEffect Hook</h1>
            <h1>{data}</h1>
            <h3>{name}</h3>
            <button onClick={changeData}>Click me</button>
            <button onClick={handleDec} >Dec {decrement}</button>
            <button onClick={handelInc} >Inc {increment}</button>
        </>
    )
}

export default UseEffectHook