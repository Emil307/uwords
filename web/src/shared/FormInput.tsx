import React, { ChangeEventHandler } from 'react';
import styled from 'styled-components';

const FormInputStyled = styled.input`
  width: 380px;
  height: 73px;
  border: 3px solid rgba(238, 238, 238, 1);
  padding-left: 20px;
  border-radius: 24px;

  font-family: 'Roboto', sans-serif;
  font-size: 15px;
  line-height: 18px;

  color: #DECECE;

  &::placeholder {
    color: #DECECE;
  }
`

interface FormInputProps {
  type?: string,
  placeholder: string,
  name: string,
  value: string,
  onChange: ChangeEventHandler<HTMLInputElement>,
}

const FormInput: React.FC<FormInputProps> = ({ type, placeholder, name, value, onChange }) => {
  return (
    <FormInputStyled placeholder={placeholder} type={type} name={name} value={value} onChange={onChange}/>
  )
}

export default FormInput;