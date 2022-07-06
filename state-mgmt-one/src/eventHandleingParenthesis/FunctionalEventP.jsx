import React from 'react'

export const FunctionalEventP = () => {
    const changeEvent=()=> {
        console.log('class component event changed')
    }
    return (
        <div>
            <h2>Functional Component</h2>
            <button onClick={changeEvent}>Change</button>
        </div>
    )
}