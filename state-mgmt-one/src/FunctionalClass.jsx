// React components let you break up the user interface into separate pieces that can be reused ans handled independently

// Functional component(stateless component)

// 1. functional components are basic javascript functions. These are typically arrow functions but can also be created with the reqular function keyword.
// 2. React lifecycle methods (for example, componentDidMount) cannot be used in functional components.
// 3. There is no render method used in functional component
// 4. These are mainly responsible for UI and are typically presentational only(for eg: a button component).
// 5. Functional components can accept and use props(property).
// 6. functional components should be favored if you do not need to make use of React state.

import React from 'react'

const FunctionalC = () => {
    return (
    //   return html
      <div>
        <h1>---------Components and its type-----------</h1>
         <h3>Hello, Functional Component </h3>
      </div>
   
  )
}

// export default FunctionalC

// Class Component
// 1. Class components make use of ES6 class and extend the commponent class in React.
// 2. Sometimes called "smart" or "statefull" component as they tend to implement logic and state.
// 3. React lifecycle methods can be used inside class component. example, componentDidMount
// 4. You pass props down to class components and access them with this.props

// make class extend liya component ko from react
class ClassComponent extends React.Component{
  // render method return html element
  render(){
    return <h3>
      Hello, class component
    </h3>
  }
}

export {FunctionalC, ClassComponent}


