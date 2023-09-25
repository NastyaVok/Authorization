import { useState, useEffect } from 'react';
import { Typography } from '@mui/material';

import { UIProgress } from '../../components/UI/Progress';
import { UITable } from '../../components/UI/Table';
import { UIPagination } from '../../components/UI/Pagination';
import { getApiResource } from '../../utils/network';
import { URL_DATA } from '../../constants/api';
import { DataTable} from '../../types/interfaces';

import { constructorArray } from './transformToArray';
import { titles } from './data';

export const Order = () => {
  const [data, setData] = useState<DataTable[]>([]);
  const [count, setCount] = useState(0);
  const [page, setPage] = useState(1);
  const [length, setLength] = useState(0);
  const [progress, setProgress] = useState(true);

  const getResource = async (url: string) => {
    const res = await getApiResource(url);
    if(res) {
      if (res.data.length) {
        const data = res.data;
        const newArr = constructorArray(data);
        setData(newArr);
        setCount(Math.ceil(newArr.length/5));
        setLength(res.data.length);
        setProgress(false);
      } else {
        setData([]);
        setLength(0);
        setCount(0);
        setProgress(false);
      }
    }
    return [];
  };

  useEffect(() => {
    getResource(URL_DATA);
  }, []);
    
  const content = () => {
    const start = (page-1)*5;
    const end = start+5;
    if(page===count) {
      return data.slice(start);
    } else {
      return data.slice(start,end);
    }
  };

  return (
    <>
      {
        progress 
          ?
          <UIProgress />
          :
          <>
            <Typography> 
            Number of goods: {length}
            </Typography>
            <UITable 
              titles={titles}
              contents={content()}
            />
            <UIPagination 
              count={2}
              page={page}
              setPage={setPage}
            />
          </>
      }
    </>
  );
};