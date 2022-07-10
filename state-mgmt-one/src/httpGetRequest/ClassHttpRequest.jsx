import React from 'react'
import axios from 'axios';

class ClassHttpRequest extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            users: [],
            error:" "
        }
    }
    // call once the data render if we want data from restfull api or any 3rd party than this method we can use
    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/users').then((res) => {
            console.log("class data", res.data)
            this.setState({users:res.data})
        }).catch((err) => {
            this.setState({error:"URL Error"})
            console.log(err)
        })
    }

    // displayUser = () => {
    //     this.setState({
            
    //     })
    // }

    render() {
        const {users, error} = this.state
        return (
            <div>
                <h1>Class http request</h1>
              {/* ternary operator if user available users.length ? map function : null */}
                { users.length ?
                    users.map((el) => (
                        <div key={el.id} className="sub-div">
                        <h3>
                            {el.name}
                        </h3>
                            <h4>
                                {el.email}
                                
                            </h4>
                            </div>
                    )) : null}
                {
                    error ? <div>{ error}</div>:null
                }
                
            </div>
        )
    }
}

export default ClassHttpRequest