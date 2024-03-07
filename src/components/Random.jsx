
import Spinner from './Spinner';
import useGif from '../hooks/useGif';
export default function Random() {
  const { gif, loading, getdata } = useGif("");
  function handler() {
    getdata();
  }
  return (
    <div className='bg-green-500  rounded-md border-2 border-black w-1/2 flex flex-col  min-h-[300px] justify-center items-center gap-4 mt-8 py-7'>
      <h1 className='text-2xl underline uppercase font-bold'>A Ramdom Gif </h1>

      {
        loading ? (<Spinner></Spinner>) : (<img src={gif} className='max-h-[300px] w-[450px]' alt="" />)
      }
      <button className='bg-yellow-500 rounded-md py-2 hover:opacity-90 w-9/12' onClick={handler}>Generate</button>
    </div>
  )
}

