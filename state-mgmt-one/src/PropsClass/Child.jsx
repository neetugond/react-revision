import React from 'react'

export class Child extends React.Component{
    render() {
        return (
            <>
                {/* without this key word or with this both are valid */}
                <h3>class child component {this.props.data} {this.props.way}</h3> 
                {this.props.children}
                 {/* Children and children both are valid */}
            </>
        )
    }
}

