import styled from 'styled-components'

export const SettingsCard = styled.div`
height: auto;
background-color: #fff;
margin: auto;
width: 62%;
position: absolute;
top: calc(8% + 3rem);
left: 60%;
border-radius: 4px;
transform: translateX(-50%);
`

export const SettingsHeader = styled.div`
width: 100%;
display: flex;
justify-content: space-between;
padding: 0.5rem 1.4rem;
height: 30%;

div{
    font-size: 20px;
}

button {
    background-color: #00068C;
    color: white;
    padding: 0.4rem;
    height: 80%;
    text-align: center;
    border-radius: 4px;
    display: flex;
    justify-content: center;
    outline: none;
    border: none;
    cursor: pointer;
}
`

export const SettingsContent = styled.div`
height: 70%;
padding: 0.7rem 1.4rem;
width: 50%;
margin: 1rem 0rem;
`

export const SettingsContentHeader = styled.div`
display: flex;
justify-content: space-between;
width: 45%;
div{
    position: relative;
    font-weight: medium;
    cursor: pointer;
}

.show-active {
    color: black;
    font-weight: 550;
}

.show-active::after {
    content: "";
    color: black;
    width: 50%;
    height: 100%;
    position: absolute;
    top: 19%;
    left: 50%;
    transform: translateX(-50%);
    border-bottom: 2px solid #00068C;
}
`

export const ProfileDetails = styled.div`
margin-top: 0.5rem;
`