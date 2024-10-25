import { useState } from 'react';
import { useWindowSize } from './useWindowSize';
function App() {
  const { width, heigth } = useWindowSize();
  return (
    <>
      <div>
        <p>width : {width}</p>
        <p>Height: {heigth}</p>
      </div>
    </>
  );
}

export default App;
