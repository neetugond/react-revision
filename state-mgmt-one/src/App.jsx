import React from 'react'
import './App.css'
import JsAndjsx from './JsAndjsx'
import {FunctionalC, ClassComponent} from './FunctionalClass'
import { FunctionComponent} from './FunctionComponent'
import ClassComponentMain from './ClassComponentMain'

function App() {

  return (
    <div className="App">
      <JsAndjsx />
      <FunctionalC></FunctionalC>
      <ClassComponent></ClassComponent>
      <FunctionComponent></FunctionComponent>
      <ClassComponentMain></ClassComponentMain>
    </div>
   
  )
}

export default App
