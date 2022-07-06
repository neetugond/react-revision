// props
// 1.Props get passed to the component (get passed through one component and receive by another component in parameter and return html)
// 2. props are immutable
// 3. props- functional component
// 4. this.props - class component

// state
// 1. state is managed with in the component
// 2. state can be changed
// 3. UseState Hook - functional components
// 4. this.state - class components (for accessing state object)


import React, { useState } from 'react';

export const StateFunctional = () => {
    const [count, setCount] = useState(0);

    const handleInc = () => {
        setCount(count+1)
    }
    const handleDec = () => {
        if (count > 0) {
            setCount(count-1)
        }
       
    }
    return (
        <>
            <h2>state- functional component</h2>
            <h3>{count}</h3>
            <button onClick={handleDec}>-</button>
            <button onClick={handleInc}>+</button>
        </>
    )
}