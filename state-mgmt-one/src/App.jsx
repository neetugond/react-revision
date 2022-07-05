import React from 'react'
import './App.css'

const name = <span>hello span</span>

// without jsx proper way it take 3 parameter element, className and text
const newElement = React.createElement("h2", { className: 'newElement' }, 'hello h2 text without jsx syntax')

const text = ()=>{
alert('calling neetu')
}
const input = function (e) {
  // if (e.key === 'Enter') {
  //   alert('enter button click')
  // }
  if (e >= 18) {
    return<span>You are eligible</span>
  } else {
    return <span>You are not eligible</span>
  }
  
}

function App() {

  return (
    <div className="App">
      <h1>hello from jsx, {name}</h1>
      {newElement}
      {/* <input type="text" value="" onKeyPress={input} /> */}
      <button onClick={text} style={{backgroundColor: 'black', color: 'white'}} >call neetu</button>
      {input(17)}
    </div>
   
  )
}

export default App
