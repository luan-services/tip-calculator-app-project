import React from 'react'

const TipBtn = (props) => {
  return (
    <button type="button" onClick={props.onClick} className={`cursor-pointer active:scale-95 col-span-1 p-2 rounded-md transition ${props.colors}`}>
        <span>{props.children != null ? props.children : props.text}</span>
    </button> 
  )
}

export default TipBtn
