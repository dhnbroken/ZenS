import { GlobalContextProvider } from 'src/context/GlobalContext';
import React from 'react';

const Content: React.FC = () => {
  const over = "That's all the jokes for today! Come back another day!";
  const { jokes, setJokes, index, setIndex } = React.useContext(GlobalContextProvider);
  const removeJoke = () => {
    setIndex(0);
    if (!jokes.includes('Thats all')) {
      const newJokes = [...jokes];
      newJokes.splice(index, 1);
      setJokes(newJokes);
    }
    if (jokes.length === 1) {
      setJokes([over]);
    }
  };

  return (
    <React.Fragment>
      <div className='container-fluid content'>
        <h1>A joke a day keeps the doctors away</h1>
        <br />
        <span>If you joke wrong way, your teeth have to pay. (Serious)</span>
      </div>
      <div className='grid-60 joke'>
        <p className={jokes.includes(over) ? 'joke__story text-center' : 'joke__story'}>{jokes[index]}</p>
        <hr />
        <div className='joke-button'>
          <button className='like' onClick={() => removeJoke()}>This is Funny!</button>
          <button className='dislike' onClick={() => removeJoke()}>This is not Funny.</button>
        </div>
      </div>
      <hr />
    </React.Fragment>
  );
};

export default Content;
