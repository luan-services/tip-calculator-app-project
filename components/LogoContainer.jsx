import React from 'react'
import logo from "../src/assets/images/logo.svg"

const LogoContainer = () => {
  return (
    <div className="flex p-12"> 
        <img className="md:object-center object-cover" src={logo} alt="Product Image" />
    </div>
  )
}

export default LogoContainer
