import React from 'react'
import { ButtonContainer } from './style'

const Button = ({ tittle, variant = "primary", onClick }) => {
  return (
    <ButtonContainer variant={variant} onClick={onClick}>
      {tittle}
    </ButtonContainer>
  )
}
export default Button 
