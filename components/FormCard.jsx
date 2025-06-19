import React, { useState } from 'react'
import { imgsSrc } from "../objects/FormImages"
import FormImputs from "../components/FormInputs"
import DismissBtn from "../components/DismissBtn"

const FormCard = () => {
    
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [selectedEmail, setSelectedEmail] = useState("");

    const handleIsSubmitted = () => {
        setIsSubmitted(true)
        console.log("O YEE")
    };

    const handleSelectedEmail = (mail) => {
        setSelectedEmail(mail)
    };

    const handleDismissMessage = () => {
        setIsSubmitted(false)
        setSelectedEmail("")
    };

    return (
        <>
            {!isSubmitted &&
                <div className="flex flex-col md:flex-row md:items-center max-w-108 md:gap-8 md:max-w-200 md:p-4 md:pl-12 md:rounded-2xl bg-white">

                    <div className="flex overflow-hidden md:order-2 ">
                        <picture>
                            <source srcSet={imgsSrc.signupDesktop} media="(min-width: 768px)" />
                            <img className="w-108 h-64 md:w-full md:h-132 md:object-center object-cover rounded-b-xl md:rounded-2xl" src={imgsSrc.signupMobile} alt="Product Image" />
                        </picture>
                    </div>

                    <div className="flex flex-col gap-4 px-4 py-8 md:px-0 md:max-w-90 md:py-0 md:items-center md:order-1">
                        <div className="flex">
                            <span className="font-roboto-bold text-custom-blue-800 font-black text-4xl md:text-5xl md:font-bold md:text">Stay updated!</span>
                        </div>
                        <div className="flex">
                            <span className="font-roboto-bold text-custom-blue-800 text-md">Join 60,000+ product managers receiving monthly updates on:</span>
                        </div>
                        <ul className="flex flex-col gap-4" >
                            <li className="flex gap-4 items-center">
                                <img className="flex w-6 h-10 md:h-auto" src={imgsSrc.iconSuccess} alt="Product Image" />
                                <span className="font-roboto-bold text-custom-blue-800 text-md">Product discovery and building what matters</span>
                            </li>
                            <li className="flex gap-4 items-center">
                                <img className="flex w-6 h-10 md:h-auto" src={imgsSrc.iconSuccess} alt="Product Image" />
                                <span className="font-roboto-bold text-custom-blue-800 text-md">Measuring to ensure updates are a success</span>
                            </li>
                            <li className="flex gap-4 items-center">
                                <img className="flex w-6 h-10 md:h-auto" src={imgsSrc.iconSuccess} alt="Product Image" />
                                <span className="font-roboto-bold text-custom-blue-800 text-md">And much more!</span>
                            </li>
                        </ul>
                        <div className="flex w-full">
                            <FormImputs setSelectedEmail={handleSelectedEmail} setSubmitted={handleIsSubmitted}/>
                        </div>

                    </div>

                </div>
            }
            {isSubmitted &&
                <div className="flex flex-col max-w-108 bg-white justify-between items-center md:rounded-2xl md:px-8 md:py-4 md:max-w-112">

                    <div className="flex flex-col gap-4 px-4 py-8">
                        <div className="flex">
                            <img className="flex w-16 md:w-14" src={imgsSrc.iconSuccess} alt="Product Image" />
                        </div>
                        <div className="flex">
                            <span className="font-roboto-bold text-custom-blue-800 font-black md:font-bold text-3xl md:text-5xl">Thanks for subscribing!</span>
                        </div>
                        <div className="flex">
                            <span className="font-roboto-bold text-custom-blue-800 text-md">
                                A confirmation email has been sent to  <span className="font-bold"> {selectedEmail}</span>. 
                                Please open it and click the button inside to confirm your subscription.
                            </span>
                        </div>
                    </div>

                    <div className="flex w-full px-4 py-8">
                        <DismissBtn onClick={handleDismissMessage}>
                            Dismiss
                        </DismissBtn>
                    </div>
                </div>
            }
        </>

    )
}

export default FormCard