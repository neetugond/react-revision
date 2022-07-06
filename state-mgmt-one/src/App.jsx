import React from 'react'
import './App.css'
import JsAndjsx from './JsAndjsx'
import {FunctionalC, ClassComponent} from './FunctionalClass'
import { FunctionComponent} from './FunctionComponent'
import ClassComponentMain from './ClassComponentMain'
import FuncParent from './PropsFunctional/Parent'
import ChildParent from './PropsClass/Parent'
import { StateFunctional } from './state/StateFunctional'
import StateClass from './state/StateClass'
import ClassEventP from './eventHandleingParenthesis/ClassEventP'
import { FunctionalEventP } from './eventHandleingParenthesis/FunctionalEventP'
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
      <StateFunctional></StateFunctional>
      <StateClass></StateClass>
      <ClassEventP></ClassEventP>
      <FunctionalEventP></FunctionalEventP>

    </div>
   
  )
}

export default App
