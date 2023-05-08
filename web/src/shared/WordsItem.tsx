import React from 'react';
// shared
import Title from './Title';
// icons
import acceptIcon from '../images/accept-icon.svg';
import disabledIcon from '../images/disabled-icon.svg';
// styles
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`

const Content = styled.div``

const Text = styled.p`
  color: rgba(0, 0, 0, 0.3);;
`

const Span = styled.span``

interface WordsItemProps {
  value: string,
  translate: string,
  isLearned: boolean,
}

const WordsItem: React.FC<WordsItemProps> = ({ value, translate, isLearned }) => {
  return (
    <Container>
      <Content>
        <Title fontSize={18}>{translate}</Title>
        <Text>{value}</Text>
      </Content>
      <Span>
        {isLearned ?
          <img src={acceptIcon} alt="learned" /> :
          <img src={disabledIcon} alt="new word" />
        }
      </Span>
    </Container>
  )
}

export default WordsItem