import React from 'react'
import './App.css'
import JsAndjsx from './JsAndjsx'
import {FunctionalC, ClassComponent} from './FunctionalClass'
import { FunctionComponent } from './FunctionComponent'


function App() {

  return (
    <div className="App">
      <JsAndjsx />
      <FunctionalC></FunctionalC>
      <ClassComponent></ClassComponent>
      <FunctionComponent></FunctionComponent>
    </div>
   
  )
}

export default App
