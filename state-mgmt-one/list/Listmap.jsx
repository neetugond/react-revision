import React,{Component} from 'react'

class Listmap extends Component{
    state = {
        users: [
          {id:1, name:"peeku", class:"A"},
          {id:2, name:"neetu", class:"B"}
      ]
  }

    render() {
        const number = this.props.numbers
        // console.log("users", this.state.users)
        // map return callback function

        // const newNumber = number.map((number) => { return <li>{number}</li> })

        // const userMap = this.state.users.map(function (user) {
        //     return (
        //         <>
        //             <h3 key={user.id}>{ user.id} {user.name} { user.class}</h3>
        //             {/* <h4>{user.name} { user.class}</h4> */}
                    
        //         </>
        //     )
        // })
        // console.log("newNumber",newNumber)
        return (
            <>
                <h2>props - List map</h2>
                <ul>{
                    number.map((number) => {
                        return (
                            <li key={number}>{number}</li>
                               )
                        }
                        )
                }</ul>
                <h2>state- list map array of object</h2>
                {/* {number[0]} we can directly access */}
                
                {/* {userMap} */}
                
               
                
            </>
        )
    }
}

export default Listmap