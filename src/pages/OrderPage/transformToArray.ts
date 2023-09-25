import { Data } from '../../types/interfaces';

export const constructorArray = (data: Data[]) => {
  const array: {content: string[], id: string}[] = [];
  data.forEach(({
    name,
    amount,
    price,
    id,
  }) => {
    const values = [
      name,
      price + ' RUB',
      String(amount),    
    ];
    array.push({content: values, id: id});
  });
  return array;
};