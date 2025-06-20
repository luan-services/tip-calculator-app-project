import React from "react"
import TipCalculator from "./TipCalculator"
import LogoContainer from "../components/LogoContainer"

const FormContainer = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen md:items-center md:py-20 md:px-10">
            <LogoContainer/>
            <TipCalculator></TipCalculator>
        </div>
    )
}

export default FormContainer
