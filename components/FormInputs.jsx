import React from 'react'
import { useState } from 'react';
import FormBtn from './FormBtn';

const FormInputs = (props) => {

  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    /* o default de um submit é recarregar a pagina e.preventDefault() impede isso */
    setError("");

    /* if the email is not valid */
    if (!validateEmail(email)) {
      setError("Valid email required");
      return;
    }

    console.log("Email submitted:", email);
    props.setSubmitted();
    /* set email as submited on parent component to load the thank you page */
    props.setSelectedEmail(email);
    /* set the selected email name on parent component to show the text on the thank you text */
    setEmail("");
  };


  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col w-full gap-2">
      {/* é necessário manter noValidate no form para os efeitos do react funcionarem, noValidate impede q o browser veja se o email é valido, e deixa o codigo rodar*/}
          <div className="flex flex-row justify-between">
            <span className="font-roboto-bold font-bold text-custom-blue-800 text-sm">Email address</span>

            {error && 
              <p className="text-red-500 text-sm">{error}</p>
            }
          </div>
          

          <input type="email" required placeholder="email@company.com" className={`border w-full mb-2 text-sm rounded-lg px-5 
            py-3 focus:outline-none focus:border-blue-500 ${error ? "border-red-500 " : "border-gray-300"}`} 
            value={email} onChange={(e) => setEmail(e.target.value)}/>
            {/* value é o valor que fica dentro da caixa de input, para atualizar esse valor precisamos setar ele como um useState
              e onChange precisa ser uma funcao set do mesmo useState, isso pq sem state o DOM não é atualizado */}
          
          <FormBtn>
            Subscribe to monthly newsletter
          </FormBtn>
    </form>
  )
}

export default FormInputs
