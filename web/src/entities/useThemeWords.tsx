import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { IWord } from '../types/types'; 
import axios, { AxiosError } from 'axios';

export function useThemesWords() {
  const [words, setWords] = useState<IWord[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');


  const {id} = useParams();
  const API = 'http://localhost:8000/api/v1/word/' + id;

  async function getWords() {
    try {
      setError('');
      setLoading(true);
      const response = await axios.get<IWord[]>(`${API}`);
      setWords(response.data);
      setLoading(false);
    } catch (e: unknown) {
      const error = e as AxiosError;
      setLoading(false);
      setError(error.message);
    }
  }

  useEffect(() => {
    getWords();
  }, [])

  return { words, loading, error }
}