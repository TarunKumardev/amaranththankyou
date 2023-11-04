import { useState } from 'react';

export function useArray<T>(initialArray: T[]) {
  const [state, setState] = useState<T[]>(initialArray);

  const remove = (index: number) => {
    const newArray = [...state.slice(0, index), ...state.slice(index + 1)];
    setState(newArray);
  };

  const update = (index: number, newItem: T) => {
    const newArray = [...state];
    newArray[index] = newItem;
    setState(newArray);
  };

  return {
    state,
    remove,
    update,
  };
}
