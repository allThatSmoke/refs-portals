import { useState, useRef } from 'react';

export default function Player() {
  // create ref value to get value entered into input field
  const playerName = useRef();
  
  const [enteredPlayerName, setEnteredPlayerName] = useState('');

  function handleClick(){
    setEnteredPlayerName(playerName.current.value)
    // clear input after submitted
    playerName.current.value = '';
  }

  return (
    <section id="player">
      <h2>Welcome {enteredPlayerName ?? 'unknown entity'}</h2>
      <p>
        <input 
          ref={playerName}
          type="text"
        />
        <button onClick={handleClick}>
          Set Name
        </button>
      </p>
    </section>
  );
}
