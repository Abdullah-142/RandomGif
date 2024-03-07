import React, { useState } from 'react'
import Spinner from './Spinner';
import useGif from '../hooks/useGif';
export default function Random() {
  const [tag, settag] = useState('car')
  const { gif, loading, getdata } = useGif(tag);
  const [count, setCount] = useState(false);
  const [enterCount, setEnterCount] = useState(0);

  function handleEnter(event) {
    if (event.key === 'Enter') {
      if (count) {
        return;
      }
      setEnterCount(enterCount + 1);
      if (enterCount == 10) {
        setEnterCount(0);
        setCount(true);
        alert("You have exceeded the limit of 5 requests in 10 seconds. Please wait for 10 seconds before trying again.");
        setTimeout(() => (
          setCount(false)
        ), 8000)
        return;
      }
      getdata(tag);
    }
  }

  return (
    <div className='bg-blue-500 min-h-[400px] rounded-md border-2 border-black w-1/2 flex flex-col justify-center items-center gap-4 mt-8 py-7'>
      <h1 className='text-2xl underline uppercase font-bold'>Random {tag} Gif </h1>

      {
        loading ? (<Spinner></Spinner>) : (<img src={gif} className='max-h-[300px] w-[450px]' alt="" />)
      }
      <input type="text" className={`w-[75%] py-1 text-lg text-center  rounded-lg ${count ? "pointer-events-none opacity-50" : "cursor-pointer"}`} onChange={(event) => settag(event.target.value)} onKeyDown={(event) => handleEnter(event)} value={tag} />
      <button className={`bg-yellow-500 rounded-md py-2  w-9/12 ${count ? "opacity-50 cursor-not-allowed hover:none" : 'hover:opacity-90'}`} onClick={() => getdata(tag)} disabled={count} >Generate</button>
    </div>
  )
}

