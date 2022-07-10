import React from "react";

class Product extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
        console.log('constructor')
    }
    static getDerivedStateFromProps(props, state) {
        console.log('getDerivedStateFromProps')
        
        return null;
    }

      updateCount=()=>{
        this.setState({
           count:this.state.count+1
        })
    }

    componentDidMount() {
        console.log('componentDidMount')
        
    }
    componentDidUpdate(prevProps, prevState) {
       console.log('componentDidUpdate')
       
    }

  
    render() {

        return (
            <>
                <h2>{this.state.count}</h2>
                <button onClick={this.updateCount}>increment</button>
            </>
        )
    }
}

export default Product