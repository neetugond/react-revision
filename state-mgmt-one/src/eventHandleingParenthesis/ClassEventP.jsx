import React from "react";

class ClassEventP extends React.Component{
  
    changeEvent() {
        console.log('class component event changed')
    }

    render() {
        return (
            <>
                <h1>Event Handelling Parenthesis()</h1>
                {/* after clicking event occured not before. this.changeEvent() called the event before clicking button  */}
                <h2>Class Component</h2>
                <button onClick={this.changeEvent}>Change</button>
            
            </>
        )
    }
}

export default ClassEventP