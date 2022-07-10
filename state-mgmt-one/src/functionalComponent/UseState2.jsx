import React,{useState} from 'react'

export const UseState2 = () => {

    const [data, setData] = useState("elder sister")
    const [name, setName] = useState("Priyanka")

    const changeData = () => {
        setData("younger sister");
        setName("Neetu")
    }

    return (
        <>
            <h2>function based - useState</h2>  
            <h1>{ data}</h1>
            <h3>{ name}</h3>
            <button onClick={changeData}>Click me</button>
        </>
    )
}

export class Counter extends React.Component{
    constructor() {
        super();
        this.state = {
            count: 0
        }
    }
    handelDec = () => {
        this.setState(e => ({
            count: e.count - 1
            
        })) 
        // or

        // this.setState(() => {
        //     count:this.state.count-1
        // })
    }
    handleInc = () => {
        this.setState(e => ({
            count:e.count+1
        }))
    }
    render() {
        return (
            <>
                <h2>class based - useState</h2>
                <h3>{this.state.count}</h3>
                <button onClick={this.handelDec}>-</button>
                <button onClick={this.handleInc}>+</button>
            </>
        )
    }
}

