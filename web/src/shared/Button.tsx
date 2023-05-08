import React from 'react';
import styled from 'styled-components';

const ButtonContainer = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 48px;
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
  background: #3CEEB5;
  color: #fff;
  border-radius: 10px;
  box-shadow: 0px 4px 1px #ABE6EE;
  transition: all .2s ease;
  &:hover {
    background: #ABE6EE;
    transform: translateY(4px);
    box-shadow: 0px 0px 0px #ABE6EE;
  }
`

interface ButtonProps {
  children: React.ReactNode,
  height?: string,
  width?: string,
  onClick?: (e: React.MouseEvent) => void,
}

const Button: React.FC<ButtonProps> = ({ children, height, width, onClick }) => {
  return (
    <ButtonContainer onClick={onClick} style={{height: height, width: width}}>{children}</ButtonContainer>
  )
}

export default Button;