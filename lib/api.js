
import axios from 'axios';

  const fetchAPI = async (url) =>  {
    const dev = process.env.NODE_ENV != 'production';
    const server = dev ? process.env.HOST : 'https://alealmeida.co/';

    function getUrl(server) {
      return `${server}`
    }

    const requestUrl = getUrl(path);
    const res = await fetch(requestUrl);
    const data = await res.json();
    return console.log(`${data} fapi`),data;
  }



export const fetcher = async (url) => {
  const res = await fetch(url)
  const data = await res.json()

  if (res.status !== 200) {
    throw new Error(data.message)
  }
  return console.log(`${data} fer`),data;
}


const getHost = axios.create({
  baseURL: process.env.HOST,
});

export default getHost;