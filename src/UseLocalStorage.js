import { useEffect, useState } from 'react';

const getSavedValue = (key, initialValue) => {
  // if saved value exists, return it; otherwise return the initial value
  const savedValue = localStorage.getItem(key)
  if (savedValue && savedValue !== 'undefined') {
    return JSON.parse(savedValue);
  
  }

  // check if initial value is a function and return the result of that function if it is
  if (initialValue instanceof Function) {
    return initialValue();
  }
  return initialValue;
};

export const useLocalStorage = (key, initialValue) => {
  // we use a function notation in the default value to make it run only once
  const [value, setValue] = useState(() =>{
     return getSavedValue(key, initialValue)
    });
  

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value]);

  return [value, setValue];
};
