import React, { useState } from 'react';
import './App.css';

function App() {
  const [emotion, setEmotion] = useState('happy');
  console.table(emotion);
  return (
    <>
      <h1>Current emotion is {emotion}.</h1>
      <button onClick={() => setEmotion('fascinated')}>Fascinate Me</button>
      <button onClick={() => setEmotion('constipated')}>Constipate Me</button>
      <button onClick={() => setEmotion('sublime')}>Sublime Me</button>
    </>
  );
}

export default App;
