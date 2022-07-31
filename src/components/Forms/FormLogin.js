import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import GlobalStyles from '../styled/GlobalStyles'
import SignUpContainer from '../styled/SignUpContainer.styled'
import hacker from '../../assets/hacker.jpg'
import { BackgroundImage } from '../styled/BackgroundImage.styled'
import { FormContainer } from '../styled/FormContainer.styled'
import { FormHeader } from '../styled/FormHeader.styled'
import { StyledHeader } from '../styled/HeaderText.styled'
import { StyledSubtext } from '../styled/StyledSubtext'
import { StyledForm } from '../styled/StyledForm.styled'
import { StyledFormElement } from '../styled/StyledFormElement'
import { StyledInputDiv } from '../styled/StyledInputDiv.styled'
import { StyledInput } from '../styled/Input.styled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import { FormButton } from '../styled/FormButton.styled'
import { BorderRight } from '../styled/BorderRight.styled'
import { StyledFormLink } from '../styled/FormLink.styled'
import { faEye } from '@fortawesome/free-regular-svg-icons'
import { useNavigate } from 'react-router-dom'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from "yup"
import { DropdownLink } from '../styled/Sidebar.styled'

const schema = yup.object({
  email: yup.string().email().required(),
  password: yup.string().min(8).max(15).required(),
});

const FormLogin = () => {
  const [passwordShown, setPasswordShown] = useState(false);
  const [showPassword, setShowPassword] = useState(false)

  const togglePassword = () => {
    setPasswordShown(!passwordShown)
    setShowPassword(!showPassword)
    console.log(passwordShown)
}

const navigate = useNavigate()
const {register , handleSubmit, formState: {errors}, trigger} = useForm({
  resolver: yupResolver(schema)
})

  const onSubmitLogin = (data) => {
    navigate('/Home/Dashboard')
    console.log(data)
  }

  const onError = (error) => console.log(error)

  // const showWorking = () => console.log("I work")

  console.log('errors',errors.email)
  errors.email ? console.log("email errors") : console.log("No errors")
  return (
    <SignUpContainer>
        <GlobalStyles />
        <BackgroundImage src={hacker} />
        <FormContainer>
            <FormHeader>
                <StyledHeader color="#00068C"><BorderRight><DropdownLink to="/login">Login</DropdownLink></BorderRight></StyledHeader>
                <StyledHeader color="black" ><DropdownLink to="/signup">Sign Up</DropdownLink></StyledHeader>
            </FormHeader>
            <StyledSubtext align="left" border="0.3px solid rgba(0,0,0,0.5)">
                Login with your details to access your account
            </StyledSubtext>
            <StyledForm className="form" onSubmit={handleSubmit(onSubmitLogin, onError)}>
            <StyledFormElement>
            <label htmlFor="email" className='form-label'>
              Email
            </label>
            <StyledInputDiv className = {errors.email && 'invalid'}>
              <StyledInput
                id="email"
                type="email"
                name="email"
                placeholder="loremipsum@gmail.com"
                required={true}
                {...register("email")}
              onKeyUp = {() => trigger("email")}
              />
              
            </StyledInputDiv >
            {errors.email && <p>{errors.email.message}</p>}
            </StyledFormElement>
            <StyledFormElement>
            <label htmlFor="password" className="form-label">
              Password
            </label>
            {/* <FontAwesomeIcon icon={faKey} /> */}
            <StyledInputDiv className = {errors.password && 'invalid'}>
              <StyledInput
                id="password"
                type={passwordShown ? "text":"password"}
                name="password"
                className="form-input"
                placeholder="Current Password"
                autoComplete='true'
                required={true}
                {...register("password")}
                onKeyUp = {() => trigger("password")}
              />
             {passwordShown ? <FontAwesomeIcon icon={faEyeSlash} className="eye-icon" onClick={togglePassword} /> :
                <FontAwesomeIcon icon={faEye} className="eye-icon"  onClick={togglePassword} />}
            </StyledInputDiv>
            {errors.password && <p>{errors.password.message}</p>}
          </StyledFormElement>
          <FormButton>
          <button
          className="form-input-btn"
          type="submit"
          >
          Login
          </button>
          </FormButton>
          <StyledSubtext align="center" border="none">
            Don't have an account yet? <StyledFormLink to="/signup">Create an account</StyledFormLink>
          </StyledSubtext>
          </StyledForm>
        </FormContainer>

    </SignUpContainer>
  )
}

export default FormLogin