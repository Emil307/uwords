import React from 'react';
import styled from 'styled-components';

const CopyrightStyled = styled.p`
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;

  color: #DECECE;
`

interface CopyrightProps {
  children: React.ReactNode,
}

const Copyright: React.FC<CopyrightProps> = ({ children }) => {
  return (
    <CopyrightStyled>{children}</CopyrightStyled>
  )
}

export default Copyright