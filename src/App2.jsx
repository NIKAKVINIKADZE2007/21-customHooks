import React from 'react';
import { useToggle } from './useToggle';

const App2 = () => {
  const [state, toggle] = useToggle();
  return (
    <>
      <div>{state ? 'on' : 'off'}</div>
      <button onClick={toggle}>Toggle</button>
    </>
  );
};

export default App2;
