import React,{useState} from 'react'

export const UseStateWithArray = () => {
    const [data, setData] = useState([])

    const randomNumber = () => {
        setData([...data, {
            id: data.length,
            value:Math.floor(Math.random()*27+1)
        }])
    }
    return (
        <>
            <h1>
                array in functional component with useState
            </h1>
            <button onClick={randomNumber}>add random Number</button>
            <div>
                {data.map((num) => (
                    <div key={num.id} style={{backgroundColor:'black', color:'green', width:50, margin:'auto'}}>
                        <h2>{ num.value}</h2>
                    </div>
                    
                ))}
            </div>
            
        </>
    )
}