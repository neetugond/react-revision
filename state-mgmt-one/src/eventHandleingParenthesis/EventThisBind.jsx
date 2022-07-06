import React,{Component} from 'react';

class EventThisBind extends Component{
    // using props in state object
    constructor(props) {
        // parent class is the component that way passing props inside super 
        super(props); //for accessing parent construction component
        // console.log("props",props)
        // for accessing this in changeEvent normal function need to bind

        // this.changeEvent = this.changeEvent.bind(this)
        // instead for bind we can use arrow function
        
        this.state = {
            course: "MCA",
            name: this.props.name
            // defined here and now we can use anywhere
        }
    }


    eventHand  (e) {
        e.preventDefault();
        console.log("hello event handling..." , this)

    }
    changeEvent = () => {
        this.setState({course:"BCA"})
        console.log('hello neetu', this.state.course, this.props.name)
    }

    

    render() {
        return (
            <>
                <h2>Event Handling with This and Bind</h2>

                <h3>props {this.props.name}</h3>
                <button onClick={this.changeEvent}>event change</button>
                {this.state.course}

                <a href="https://www.linkedin.com/in/neetu-gond-104992230/" onClick={this.eventHand}>linkedin Profile</a>
            </>
        )
    }
}

export default EventThisBind