import React from 'react';
import { useThemesList } from '../entities/useThemesList';
import WordsCard from './WordsCard';

const ThemesList: React.FC = () => {
  const { themes, loading, error } = useThemesList();

  return (
    <>
      {loading ? <p>Loading...</p>
      :
      <>
        {themes.length > 0 ?
          <>
            {error && <p>{error}</p>}
            {themes.map(theme => 
              <WordsCard title={theme.title} progress={theme.progress} count={theme.count} id={theme.id} key={theme.id}/>
            )}
          </>
          :
          <p>недостаточно данных</p>
        }
      </>
      }
    </>
  )
}

export default ThemesList;