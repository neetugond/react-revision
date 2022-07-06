import React from 'react'

const PropsKey = (props) => {
    console.log('props:', props.value)

    return (
    //   passing key as a props
        // we can not access key directly that  key  
    
      <div>{ props.value}</div>
  )
}

export default PropsKey