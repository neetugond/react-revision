import React from 'react'

class StateClass extends React.Component{
    // constructor is used to allocate memory to the object
    constructor() {
        super(); //get access of parent constructor with the help of super keyword React.Component.
        this.state = { //creating state object
            msg:"please subscribe my youtube channel"
        }

    }
    subscribe() {
    //    creating new state with the help of setState and given value00
        this.setState({ 
            msg:"Thankyou for subscribing"
        }) 
    }

    render() {
      
        return (
            <>
                <h2>state - Class Component</h2>
                <h3>{this.state.msg}</h3>
                <button onClick={()=>{this.subscribe()}}>subscribe</button>
            </>
        )
    }
}

export default StateClass