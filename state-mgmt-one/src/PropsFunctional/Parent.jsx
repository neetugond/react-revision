import React from 'react';
import Child from './Child';


const Parent = () => {
    return (
        <>
            <Child data="passing data as props from" way="parent to child" />
            {/* as a children we can access any element */}
            <p>1st child - props is property this is one way data passing from parent to child or sibling to sibling</p>
            <p>2nd child</p>
            <a href="www.google.com">google</a>
        </>
    )
}

export default Parent