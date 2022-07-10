import React from "react";

export const ListKeyProp = (props) => {
    console.log('ListKey:', props)
    
    return (
        <>
            <h2>passing props in function component with key</h2>
            <h3 key={props.name}>{ props.name+" "}</h3>
            
        </>
    )
}