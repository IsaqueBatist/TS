import React from 'react'
import { ButtonContainer } from './style'
import { IButton } from './types'
const Button = ({ tittle, variant = "primary", onClick }: IButton) => {
  return (
    <ButtonContainer variant={variant} onClick={onClick}>
      {tittle}
    </ButtonContainer>
  )
}
export default Button 
