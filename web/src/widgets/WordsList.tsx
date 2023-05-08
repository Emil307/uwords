import React from 'react';
import { useThemesWords } from '../entities/useThemeWords';
import WordsItem from '../shared/WordsItem';
import styled from 'styled-components';

const Container = styled.div`
  width: 710px;
  padding: 30px;
  background: #FFFFFF;
  box-shadow: 0px 0px 8px 2px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
`

const WordsList: React.FC = () => {
  const { words, loading, error } = useThemesWords();

  return (
    <Container>
      {loading ? <p>Loading...</p>
      :
      <>
        {words.length > 0 ?
          <>
            {error && <p>{error}</p>}
            {words.map(word => 
              <WordsItem value={word.value} translate={word.translate} isLearned={word.isLearned} key={word.id}/>
            )}
          </>
          :
          <p>недостаточно данных</p>
        }
      </>
      }
    </Container>
  )
}

export default WordsList;