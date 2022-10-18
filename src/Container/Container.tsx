import React from 'react';
import Header from 'src/components/Header';
import Content from 'src/components/Content';
import Footer from 'src/components/Footer';
import 'src/components/Header/Header.scss';

import { getJokes } from 'src/API/axios';
import { GlobalContextProvider } from 'src/context/GlobalContext';

const Container: React.FC = () => {
  const { setJokes } = React.useContext(GlobalContextProvider);

  const getJoke = async () => {
    try {
      const res = await getJokes();
      setJokes(res);
    } catch (err) {}
  };
  React.useEffect(() => {
    getJoke();
  }, []);
  return (
    <React.Fragment>
      <Header />
      <Content />
      <Footer />
    </React.Fragment>
  );
};

export default Container;
