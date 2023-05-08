import React from 'react';
import styled from 'styled-components';

const Container = styled.span`
  display: flex;
  align-items: center;
  height: 30px;
  padding: 0 15px;
  background: #ADF4DB;
  border-radius: 14px;
`

const Span = styled.span``

const Tag: React.FC = () => {
  return (
    <Container>
      <Span>#Tag</Span>
    </Container>
  )
}

export default Tag