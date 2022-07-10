import React from 'react'
import LifeCycle2 from './LifeCycle2';
class LifeCycle1 extends React.Component{

    // 1st make constructor function

    // 4th method of mouting phase 
    // 1.constructor
    // 2.getDerivedStateFromProps(before render if we want to change any this we can do with getDerivedStateFromProps)
    // 3.render(give final output on page)
    // 4.componentDidMount (after render means once display on ui componentDidMount call)
    constructor(props) {
        super(props);
        // console.log('props:', props)

        this.state = {
            name:"neetu"
        }
        console.log('LifeCycle1 :constructor')
    }
    static getDerivedStateFromProps(props, state) {
        console.log('LifeCycle1 :getDerivedStateFromProps')
        
        return null;
    }
    componentDidMount() {
      console.log('Lifecycle1 :componentDidMount')
      
  }
    render() {
        console.log('Lifecycle1 :render')
        return (
            <>
                <h2> Life Cycle 1 method</h2>
                {/* <h3>{this.state.name}</h3> */}
                <LifeCycle2></LifeCycle2>
                
            </>
        )
    }
}

export default LifeCycle1