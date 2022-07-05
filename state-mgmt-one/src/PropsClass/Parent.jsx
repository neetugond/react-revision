import React from 'react';
import {Child} from './Child'

class Parent extends React.Component{
    render() {
        return (
            <>
                <h2>Class component parent </h2>
                <Child data="passing data" way="from parent to child" />
                <p>child p element</p>

            </>
        )
    }
}

export default Parent