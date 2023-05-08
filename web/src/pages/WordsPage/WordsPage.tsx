import React from 'react';
//widgets
import Navbar from '../../widgets/Navbar';
import ThemesList from '../../widgets/ThemesList';
//shared
import Title from '../../shared/Title';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  max-width: 1170px;
  margin: 0 auto;
  padding: 42px 15px 28px;
`

const WordsPage: React.FC = () => {
  return (
    <Container>
      <Navbar/>
      <Title fontSize={30}>Words</Title>
      <ThemesList/>
    </Container>
  )
}

export default WordsPage;
