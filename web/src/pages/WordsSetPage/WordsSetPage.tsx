import React from 'react';
import { useParams } from 'react-router-dom';
import { useThemesList } from '../../entities/useThemesList';
// widgets
import WordsList from '../../widgets/WordsList';
import WordsInfo from '../../widgets/WordsInfo';
// shared
import BackArrow from '../../shared/BackArrow';
// styles
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  padding: 30px 15px 0;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
`

const Left = styled.div`
  display: flex;
  justify-content: end;
  width: 70px;
  height: calc(100vh - 30px);
`

const Right = styled.div`
  width: 270px;
`

const WordsSetPage: React.FC = () => {
  const {id} = useParams();
  const { themes } = useThemesList();

  let theme = {};

  for (let i = 0; i < themes.length; i++) {
    if ((themes[i] as any).id == id) {
      theme = themes[i];
      break;
    }
  }

  return (
    <Container>
      <Left><BackArrow href='/words'/></Left>
      <WordsList/>
      <Right>
        <WordsInfo progress={(theme as any).progress + 1} title={(theme as any).title}/>
      </Right>
    </Container>
  )
}

export default WordsSetPage;