import React, { useState } from 'react';
import { useDebounce } from './useDebounce';
const App4 = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const debounceSearchTerm = useDebounce(searchTerm, 1000);
  return (
    <div>
      <input
        type='text'
        placeholder='Search...'
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  );
};

export default App4;
