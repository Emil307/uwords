import React from 'react';
import Title from '../shared/Title';
import ProgressBar from '../shared/ProgressBar';
import styled from 'styled-components';

const Link = styled.a`
  display: block;
  margin-bottom: 30px;
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: calc(100% - 60px);
  height: 120px;
  padding: 30px;
  background: #fff;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 40px;
`

const Top = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: start;
  height: 47px;
`

const Left = styled.div``

const CountWords = styled.span`
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  color: #06407E;
`

interface WordsCardProps {
  title: string,
  progress: number,
  count: number,
  id: number,
}

const WordsCard: React.FC<WordsCardProps> = ({ title, progress, count, id }) => {
  return (
    <Link href={`/wordset/${id}`}>
      <Container>
        <Top>
          <Left>
            <Title fontSize={20}>{title}</Title>
            <CountWords>{count} words</CountWords>
          </Left>
          <ProgressBar progress={progress} height='10px' width='100px'/>
        </Top>
      </Container>
    </Link>
  )
}

export default WordsCard;