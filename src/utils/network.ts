import axios from 'axios';

export const getApiResource = async (url:string, options:{} = '') => {
  try { 
    const res = await axios.get(url, options);

    return {data: res.data, status: res.status};
  } catch (err) {
    if (err instanceof Error) {
      console.log('Could not fetch.', err.message);
      return false;
    }
  }
};