import { set } from 'mongoose';
import React, { useState } from 'react';


export const UseStateWithObjectFunction = () => {

    const [data, setData] = useState({
        fname: " ",
        lname: " "
    })

    const changeInputFunc = (e) => {
        setData({ 
            // only one input data will give at one time for merging this we need to use spread operator, so that we can get all the value 
            ...data,
            [e.target.name]: e.target.value
        })
    }

    // const submitData = () => {
        
    // }
    // onSubmit={submitData}
    return (
        <>
            <form >
                <h1>Object update in function component with useState</h1>
                <input type="text" name="fname" value={data.fname} onChange={changeInputFunc} />
                <input type="text" name="lname" value={data.lname} onChange={changeInputFunc} />
            </form>
            {data.fname}
            {data.lname}
            {/* for data in json type*/}
            {/* {JSON.stringify(data)} */}
        </>
    )
}

export class UseStateWithObjectClass extends React.Component {
    constructor() {
        super();

        this.state = {
            firstname: " ",
            lastname: " "
        }
        this.changeInput = this.changeInput.bind(this)
    }
    // changeFirstname = (e) => {
    //     this.setState({
    //        firstname: e.target.value
    //    }) 
    // }
    // changeLastname = (e) => {
    //     this.setState({
    //         lastname: e.target.value
    //     })
    // }

    // if we don't want to bind then for accessing this we need to make arrow function
    changeInput(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        const { firstname, lastname } = this.state
        return (
            <>
                <form>
                <h1>Object update in Class component</h1>
                <input type="text" name='firstname' value={firstname} onChange={this.changeInput} />
                    <input type="text" name='lastname' value={lastname} onChange={this.changeInput} />
                </form>
                {firstname}
                {lastname}
            </>
        )
    }
}
