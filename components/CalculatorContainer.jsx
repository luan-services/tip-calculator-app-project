import React from "react"
import TipCalculator from "./TipCalc"

const FormContainer = () => {
    return (
        <div className="w-full flex flex-row justify-center min-h-screen items-center md:py-20 md:px-10">
            <TipCalculator></TipCalculator>
        </div>
    )
}

export default FormContainer
