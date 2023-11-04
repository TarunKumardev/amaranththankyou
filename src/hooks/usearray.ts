import  { useState } from 'react';

type ArrayItemType = string;

export function useArray(initialArray: ArrayItemType[]) {
  const [state, setState] = useState<ArrayItemType[]>(initialArray);

  const remove = (id: number) => {
    const newArray = state.filter((item) => item.id !== id);
    setState(newArray);
  };

  const update = (index: number, newItem: ArrayItemType) => {
    const newArray = state.map((item, i) => (i === index ? newItem : item));
    setState(newArray);
  };

  return {
    state,
    remove,
    update,
  };
}


