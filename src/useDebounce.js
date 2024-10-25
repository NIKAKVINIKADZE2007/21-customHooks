import { useState, useEffect } from 'react';

export function useDebounce(name, delay) {
  const [debauncedValue, setDebauncedValue] = useState(name);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebauncedValue(name);
    }, delay);

    return () => clearTimeout(handler);
  }, [name, delay]);

  return debauncedValue;
}
