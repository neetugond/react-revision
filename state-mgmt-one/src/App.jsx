import React from 'react'
import './App.css'
import JsAndjsx from './JsAndjsx'
import {FunctionalC, ClassComponent} from './FunctionalClass'
import { FunctionComponent} from './FunctionComponent'
import ClassComponentMain from './ClassComponentMain'
import FuncParent from './PropsFunctional/Parent'
import ChildParent from './PropsClass/Parent'

function App() {

  return (
    <div className="App">
      <JsAndjsx />
      <FunctionalC></FunctionalC>
      <ClassComponent></ClassComponent>
      <FunctionComponent></FunctionComponent>
      <ClassComponentMain></ClassComponentMain>
      <FuncParent></FuncParent>
      <ChildParent></ChildParent>

    </div>
   
  )
}

export default App
