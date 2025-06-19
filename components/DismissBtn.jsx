import React from 'react'

const DismissBtn = (props) => {
  return (
    <button type="button" onClick={props.onClick} className="w-full bg-custom-blue-800 text-white text-sm rounded-lg p-3 font-semibold hover:scale-105 active:scale-95 transition">
        <span>{props.children != null ? props.children : props.text}</span>
    </button> 
  )
}

export default DismissBtn
