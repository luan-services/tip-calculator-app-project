import React from "react"
import TipCalculator from "./TipCalculator"

const FormContainer = () => {
    return (
        <div className="flex flex-row justify-center min-h-screen md:items-center md:py-20 md:px-10">
            <TipCalculator></TipCalculator>
        </div>
    )
}

export default FormContainer
