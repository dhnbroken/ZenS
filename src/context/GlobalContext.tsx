import React, { createContext, useState } from 'react';
import { JokeContext } from './JokeContext';

interface GlobalContext {
  jokes: string[]
  setJokes: (joke: string[]) => void
  index: number
  setIndex: (index: number) => void
}

interface PropsProvider {
  children: React.ReactNode
}

export const GlobalContextProvider = createContext<GlobalContext>(JokeContext);
export const GlobalStoreContext = ({ children }: PropsProvider) => {
  const [jokes, setJokes] = useState<string[]>([]);
  const [index, setIndex] = useState(0);
  const valueContext = {
    jokes,
    setJokes,
    index,
    setIndex
  };
  return <GlobalContextProvider.Provider value={valueContext}>
    {children}
  </GlobalContextProvider.Provider>;
};
