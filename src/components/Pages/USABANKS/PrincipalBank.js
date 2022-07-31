import React from 'react'
import UsaTemplate from './UsaBanksTemplate'

const PrincipalBank = () => {
  const text = "Principal Bank"
  const header = "USA banks"
  return (
    <>
    <UsaTemplate text={text} header={header}/>
    </>
  )
}

export default PrincipalBank