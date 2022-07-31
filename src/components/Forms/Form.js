 import React from 'react'
import { useState } from 'react'
import FormSignup from './FormSignup'
import FormLogin from './FormLogin'
import FormSuccess from './FormSuccess'
import { AccountContext , PasswordContext} from './AccountContext'
import DashboardPage from '../Pages/DashboardPage'
 
 const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(false)
  // const [active, setActive ] = useState("login")

  function submitForm(){
    setIsSubmitted(true)
    console.log(isSubmitted)
  }

  // const switchToSignUp = () => {
  //   setActive("signup")
  // }

  // const switchToLogin = () => {
  //   setActive("login")
  // }

  // const contextValue = {switchToSignUp, switchToLogin}
   return (
    // <AccountContext.Provider value={contextValue}>
    <>
      <FormSignup />
    </>
   )
 }
 
 export default Form