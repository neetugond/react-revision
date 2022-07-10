import React from 'react'
import axios from 'axios'

class ClassHttpPost extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: " ",
            email: " "

        }
    }


    // calling everytime new function is not good approch 

    // handleUsername = (e) => {
    //     this.setState({
    //        username:e.target.value
    //    }) 
    // }

    // handleEmail= (e) => {
    //     this.setState({
    //         email:e.target.value
    //     })
    // }

    // better approach
    changeHandler = (e) => {
        // passing name and giving state name
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state)
        // this.state will give you all data
        axios.post('https://jsonplaceholder.typicode.com/users', this.state).then((res) => {
            console.log("post data", res)
        }).catch((err) => {
            console.log(err)
        })
        // alert(`${this.state.username} ${this.state.email}`)

    }
    render() {
        const { username, email } = this.state
        return (

            <form onSubmit={this.handleSubmit}>
                <h1>Class Http Post request form filling with axios</h1>
                <div>
                    <div>
                        <label htmlFor="">username</label>
                        <input type="text" name='username' value={username} onChange={this.changeHandler} />

                    </div>
                    <div>
                        <label htmlFor="">email id </label>
                        <input type="email" name='email' value={email} onChange={this.changeHandler} />
                    </div>
                    <button type='submit'>submit</button>
                </div>
            </form>
        )
    }
}

export default ClassHttpPost