import { useState } from 'react';

export function useArray<T>(initialArray: T[]) {
  const [state, setState] = useState<T[]>(initialArray);

  const remove = (id : number ) => {
    const newArray = state.filter(item => item?.id !== id);
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
