import React from 'react';
import styled from 'styled-components';
// shared
import Title from '../shared/Title';
import ProgressBar from '../shared/ProgressBar';
import Button from '../shared/Button';
// images
import fon from '../images/fon.jpg';

const Container = styled.div`
  width: 100%;
  padding-bottom: 38px;
  background: #FFFFFF;
  box-shadow: -2px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
`

const Image = styled.img`
  width: 270px;
  height: 160px;
  border-radius: 20px 20px 0 0;
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 153px;
  margin-top: 24px;
  padding: 0 15px;
`

interface WordsInfoProps {
  progress: number,
  title: string,
}

const WordsInfo: React.FC<WordsInfoProps> = ({ progress, title }) => {
  return (
    <Container>
      <Image src={fon} alt="fon" />
      <Content>
        <Title fontSize={24}>{title}</Title>
        <ProgressBar progress={progress} width='240px' height='20px'/>
        <Button height='41px'>Continue</Button>
      </Content>
    </Container>
  )
}

export default WordsInfo