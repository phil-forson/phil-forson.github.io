import React, {  useState } from 'react'
import { useForm } from 'react-hook-form'
import SignUpContainer from '../styled/SignUpContainer.styled'
import { FormContainer } from '../styled/FormContainer.styled'
import GlobalStyles from '../styled/GlobalStyles'
import { BackgroundImage } from '../styled/BackgroundImage.styled'
import { StyledHeader } from '../styled/HeaderText.styled'
import { StyledSubtext } from '../styled/StyledSubtext'
import { StyledFormElement } from '../styled/StyledFormElement'
import { StyledInputDiv } from '../styled/StyledInputDiv.styled'
import { StyledInput } from '../styled/Input.styled'
import { FormHeader } from '../styled/FormHeader.styled'
import { BorderRight } from '../styled/BorderRight.styled'
import { StyledForm } from '../styled/StyledForm.styled'
import { FormButton } from '../styled/FormButton.styled'
import hacker from '../../assets/hacker.jpg'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEyeSlash, faEye } from "@fortawesome/free-regular-svg-icons"
import { StyledFormLink } from '../styled/FormLink.styled'
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from 'react-router-dom'
import * as yup from "yup";
import { DropdownLink } from '../styled/Sidebar.styled'

const schema = yup.object({
  email: yup.string().email().required(),
  password: yup.string().min(8).max(15).required(),
  password2: yup.string().oneOf([yup.ref("password"),null]).required("Passwords do not match"),
});

const FormSignup = () => {
  const navigate = useNavigate()
  const [passwordShown, setPasswordShown] = useState(false);
  const [password2Shown, setPassword2Shown] = useState(false)
  const [showPassword, setShowPassword] = useState(false)

  const togglePassword = () => {
    setPasswordShown(!passwordShown)
    setShowPassword(!showPassword)
}

const togglePassword2 = () => {
    setPassword2Shown(!password2Shown)
    setShowPassword(!showPassword)
}

const [areErrors, setAreErrors] = useState(true)

  const {register , handleSubmit, formState: {errors}, trigger} = useForm({
    resolver: yupResolver(schema)
  })

  const onSubmit = (data) => {
    navigate('/Home/Dashboard')
    console.log(data)
  }

  const onError = (error) => {
    console.log(error)
  }

  console.log(areErrors)
  console.log(Object.keys(errors).length !== 0)
  console.log(Object.keys(errors).length !== 0 || areErrors)

  return (
    <SignUpContainer>
      <GlobalStyles />
      <BackgroundImage src={hacker} />
      <FormContainer>
        <FormHeader>
          <StyledHeader color="black" border="black"><BorderRight><DropdownLink to="/login">Login</DropdownLink></BorderRight></StyledHeader>
          <StyledHeader color="#00068C" ><DropdownLink to="/signup">Sign Up</DropdownLink></StyledHeader>
        </FormHeader>
        <StyledSubtext align="left" border="0.3px solid rgba(0,0,0,0.5)">Create an account if you don't have one</StyledSubtext>

        <StyledForm className="form" onSubmit={handleSubmit(onSubmit, onError)}>
          <StyledFormElement>
            <label htmlFor="email" >
              Email
            </label>
            {/* <FontAwesomeIcon icon={faEnvelope} /> */}
            <StyledInputDiv className = {errors.email && 'invalid'}>
              <StyledInput
                id="email"
                type="email"
                name="email"
                className="form-input"
                placeholder="loremipsum@gmail.com"
                required={true}
                {...register("email")}
              onKeyUp = {() => trigger("email")}
              />
            </StyledInputDiv>
            {errors.email && <p>{errors.email.message}</p>}
          </StyledFormElement>

          <StyledFormElement>
            <label htmlFor="password" >
              Password
            </label>
            <StyledInputDiv className = {errors.password && 'invalid'}>
              <StyledInput
                id="password"
                type={passwordShown ? "text" : "password"}
                name="password"
                className="form-input"
                placeholder="New Password"
                required
                {...register("password")}
              onKeyUp = {() => trigger("password")}
              />
              {passwordShown ? <FontAwesomeIcon icon={faEyeSlash} className="eye-icon" onClick={togglePassword} /> :
                <FontAwesomeIcon icon={faEye} className="eye-icon" onClick={togglePassword} />}
            </StyledInputDiv>
            {errors.password && <p>{errors.password.message}</p>}
          </StyledFormElement>
          <StyledFormElement>
            <label htmlFor="password2" className= {errors.password2 && 'invalid-text'}>
              Confirm Password
            </label>
            {/* <FontAwesomeIcon icon={faCheckCircle} /> */}
            <StyledInputDiv className = {errors.password2 && 'invalid'}>
              <StyledInput
                id="password2"
                type={password2Shown ? "text" : "password"}
                name="password2"
                className="form-input"
                placeholder="Confirm Password"
                required
                {...register("password2")}
                onKeyUp = {() => trigger("password2")}
              />
              {password2Shown ? <FontAwesomeIcon icon={faEyeSlash} className="eye-icon" onClick={togglePassword2} /> :
                <FontAwesomeIcon icon={faEye} className="eye-icon" onClick={togglePassword2} />}
            </StyledInputDiv>
            <p>{errors.password2 && "Passwords do not match"}</p>
          </StyledFormElement><FormButton><button
            className="form-input-btn"
            type="submit"
          >
            Sign Up
          </button></FormButton>
          <StyledSubtext align="center" border="none">
            Already have an account? <StyledFormLink to="/login">Login</StyledFormLink>
          </StyledSubtext>
        </StyledForm>
      </FormContainer>
    </SignUpContainer>
  )
}

export default FormSignup