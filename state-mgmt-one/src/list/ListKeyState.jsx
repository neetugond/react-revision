import React from 'react'
import PropsKey from './PropsKey'

class ListKeyState extends React.Component{
    state = {
        users: [
            {id:1, name:"peeku", class:"A"},
            {id:2, name:"neetu", class:"B"}
        ]
    }
    render() {
        console.log("state", this.state.users)
        const userMap = this.state.users.map((user) => {
            return (
                // <div key={user.id}>
                //  <h2>{user.id}</h2> 
                // <h3>{user.name} { user.class}</h3>
                // </div>
                <PropsKey key={user.id} value={user.id}></PropsKey>
            )
        })
        // return (
        //     <>
        //         <h2>state passing with key</h2>
        //         {/* {userMap} */}
               
        //     </>
        // )
    }
}

export default ListKeyState