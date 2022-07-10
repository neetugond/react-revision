import React from 'react'

class LifeCycle2 extends React.Component{

    constructor(props) {
        super(props);
        // console.log('props:', props)

        this.state = {
            name:"neetu"
        }
        console.log('LifeCycle2 :constructor')
    }
    static getDerivedStateFromProps(props, state) {
        console.log('LifeCycle2 :getDerivedStateFromProps')
        
        return null;
    }
    componentDidMount() {
      console.log('LifeCycle2 :componentDidMount')
      
  }
    render() {
        console.log('LifeCycle2 :render')
        return (
            <>
                <h2> Life Cycle 2 method</h2>
                {/* <h3>{this.state.name}</h3> */}
                
            </>
        )
    }
}

export default LifeCycle2