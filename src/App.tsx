import React from 'react';
import Container from './Container';
import { GlobalStoreContext } from './context/GlobalContext';

function App (): JSX.Element {
  return (
    <React.Fragment>
      <GlobalStoreContext>
        <Container />
      </GlobalStoreContext>
    </React.Fragment>
  );
}

export default App;
