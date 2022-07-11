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
import EventThisBind from './eventHandleingParenthesis/EventThisBind'
import Listmap from './list/Listmap'
import { ListKeyProp } from './list/ListKeyProp'
import ListKeyState from './list/ListKeyState'
import Form from './form/Form'
import LifeCycle1 from './lifeCycle/LifeCycle1'
import Product from './lifeCycle/Product'
import GetData from './httpGetRequest/GetData'
import ClassHttpRequest from './httpGetRequest/ClassHttpRequest'
import ClassHttpPost from './httpGetRequest/ClassHttpPost'
import UseEffectHook from './functionalComponent/UseEffectHook'
import UseStateHook from './functionalComponent/UseStateHook'
import { UseState2, Counter } from './functionalComponent/UseState2'
import {UseStateWithObjectFunction,  UseStateWithObjectClass } from './functionalComponent/UseStateWithObject'
function App() {

  const number = [1, 2, 3, 4, 5];
  const name = ['priyanka di', "satyam","me"]
  return (
   
    <div className="App">
      {/* <JsAndjsx />
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
      <EventThisBind name="priyanka satyam"></EventThisBind>
      <Listmap numbers={number}></Listmap>
      <ListKeyProp name={name}></ListKeyProp>
      <ListKeyState></ListKeyState>
      <Form></Form>
      <LifeCycle1></LifeCycle1>
      <Product></Product>
      <GetData></GetData>
      <ClassHttpRequest></ClassHttpRequest>
      <ClassHttpPost></ClassHttpPost>
      {/* hooks*/}
      {/* <UseStateHook></UseStateHook>
      <UseEffectHook></UseEffectHook>
      <UseState2></UseState2>
      <Counter></Counter> */} 
      <UseStateWithObjectFunction></UseStateWithObjectFunction>
      <UseStateWithObjectClass></UseStateWithObjectClass>
    </div>
   
  )
}

export default App
