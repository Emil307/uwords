export interface IUser {
  id: number,
  email: string,
  password: string,
}

export interface IWordsList {
  id: number,
  user_id: number,
  title: string,
  progress: number,
  count: number,
}

export interface IWord {
  id: number,
  words_id: number,
  value: string,
  translate: string,
  img: string,
  transcription: string,
  isLearned: boolean,
}
