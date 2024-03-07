import { useEffect, useState } from 'react'
import axios from 'axios';
const API_KEY = import.meta.env.VITE_GIPHY_API_KEY;

const useGif = (tag) => {
  const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
  const tagurl = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
  const [gif, setgif] = useState('')
  const [loading, setloading] = useState(false);
  async function getdata(tag) {
    setloading(true);
    const { data } = await axios.get(tag ? tagurl : url);
    const imagesourse = data.data.images.downsized_large.url;
    setgif(imagesourse);
    setloading(false);
  }
  useEffect(() => {
    getdata('car');
  }, [])
  return { gif, loading, getdata }

};

export default useGif;
