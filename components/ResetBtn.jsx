import React from 'react'

const ResetBtn = (props) => {
  return (
    <button type="button" onClick={props.onClick} className="cursor-pointer active:scale-95 active:bg-custom-grey-200  transition p-2 rounded-md bg-custom-green-400 text-custom-green-900">
        <span>{props.children != null ? props.children : props.text}</span>
    </button> 
  )
}

export default ResetBtn
