import React from 'react'

class Form extends React.Component{

    constructor(props) {
        super();
        this.state = {
            username: " ",
            surname:" "
        }
    }

    handleUsername = (e) => {
        this.setState({
            username: e.target.value
            // for accessing the input type value
        })
        
        handleAddress = (event) => {
            this.setState({
                address: event.target.value
            })

        }
        // handleSurname = (e) => {
        //     this.setState({
        //         surname: e.target.value
        //     })
        // }
        handleSubmit = function(event){
            event.preventDefault()
            alert(`${this.state.username} ${this.state.address}`)
           
        }

    }

    render() {
        return (
            // <form onSubmit={handleSubmit}>
            <form onSubmit={() => { this.handleSubmit() }} >
                <div>
                    <h2>form using state along with event handling</h2>
                    <label>username:</label>
                        <input type="text" value={this.state.username} onChange={this.handleUsername} />
                    {/* <label>surname:</label>
                        <input type="text" value={this.state.surname} onChange={this.handleSurname} /> */}
                    <div>
                        <label>address:</label>
                        <textarea value={this.state.address} onChange={()=>{this.handleAddress()}}></textarea>
                    </div>
                    <button>Submit</button>
                    
                </div>
            </form>
        )
    }

}

export default Form