import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import hacker from '../../assets/hacker.jpg'
import Navbar from '../Navbar'
import Sidebar from '../Sidebar'
import { BodyContainer } from '../styled/BodyContainer.styled'
import { ContentGrid } from '../styled/ContentGrid.styled'
import GlobalStyles from '../styled/GlobalStyles'
import { StyledInput } from '../styled/Input.styled'
import { PageContainer } from '../styled/PageContainer.styled'
import { SettingsCard, SettingsContent, SettingsContentHeader, SettingsHeader } from '../styled/SettingsCard.styled'
import { StyledFormElement } from '../styled/StyledFormElement'
import { StyledInputDiv } from '../styled/StyledInputDiv.styled'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEyeSlash, faEye } from "@fortawesome/free-regular-svg-icons"

const schema = yup.object({
  email: yup.string().email().required(),
  password: yup.string().min(8).max(15).required("Password must be at least 8 characters"),
  currentpassword: yup.string().min(8).max(15).required(),
  password2: yup.string().oneOf([yup.ref("password"),null]).required("Passwords do not match"),
})

const SettingsPage = () => {
    const active = 'settings'

    const [selected, setSelected] = useState("profile");

    const selectProfile = () => {
      setSelected("profile")
    }

    const selectSecurity = () => {
      setSelected("security")
    }

    const {register , handleSubmit, formState: {errors}, trigger} = useForm({
      resolver: yupResolver(schema)
    })

    const [passwordShown, setPasswordShown] = useState(false);
    const [password2Shown, setPassword2Shown] = useState(false)
    const [currentpasswordShown, setCurrentPasswordShown] = useState(false)
    const [showPassword, setShowPassword] = useState(false)
  
    const togglePassword = () => {
      setPasswordShown(!passwordShown)
      setShowPassword(!showPassword)
  }
  
  const togglePassword2 = () => {
      setPassword2Shown(!password2Shown)
      setShowPassword(!showPassword)
  }

  const toggleCurrentPassword = () => {
    setCurrentPasswordShown(!currentpasswordShown)
    setShowPassword(!showPassword)
  }
  
  return (
    <PageContainer>
    <GlobalStyles />
    <ContentGrid>
    <BodyContainer>
        <img src={hacker} />
        <SettingsCard>
          <form>
          <SettingsHeader>
            <div>Settings</div>
            <button>Save Changes</button>
          </SettingsHeader>
          <SettingsContent>
            <SettingsContentHeader>
              <div className={selected == "profile" ? "show-active" : "nd"} onClick={selectProfile}>Profile Details</div>
              <div className={selected == "security" ? "show-active" : "nd"} onClick={selectSecurity}>Security</div> 
            </SettingsContentHeader>
            {selected == "profile" ? 
            
            <StyledFormElement>
              <label htmlFor="email" >
              Email
            </label>
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
              </StyledFormElement> : 
              <>
              <StyledFormElement>
              <label htmlFor="currentpassword" >
              Current Password
              </label>
              <StyledInputDiv className = {errors.password && 'invalid'} id="current">
              <StyledInput
              id="currentpassword"
              type={currentpasswordShown ? "text" : "password"}
              name="current password"
              placeholder="Current Password"
              required
              className='current'
              {...register("currentpassword")}
              onKeyUp = {() => trigger("currentpassword")}
              />
              {passwordShown ? <FontAwesomeIcon icon={faEyeSlash} className="eye-icon" onClick={togglePassword} /> :
              <FontAwesomeIcon icon={faEye} className="eye-icon" onClick={toggleCurrentPassword} />}
              </StyledInputDiv>
              {errors.currentpassword && <p>{errors.currentpassword.message}</p>}
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
              </StyledFormElement></>}
          </SettingsContent>
          </form>
        </SettingsCard>
    </BodyContainer>
  </ContentGrid>
</PageContainer>
  )
}

export default SettingsPage