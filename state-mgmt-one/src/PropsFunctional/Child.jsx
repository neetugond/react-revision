import React from 'react'

const Child = (props) => {
 // console.log(props) // with the console we can see the data of parent
    // props.data="neetu" // props are immutable we can change value give error: can't assigned read only property
    return (
        <>
            <h2>Child Component : {props.data} { props.way}</h2>
            {props.children}
        </>
    )
}

export default Child