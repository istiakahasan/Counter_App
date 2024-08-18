import React from 'react'

const Child = (props) => {
  
  props.onhandle({tittle:"I am here ,how are you."})
  
  return (
    <div>
    <p>Welcome here!!</p>
    <p>{props.data}</p>
    props
    </div>
  )
}
export default Child