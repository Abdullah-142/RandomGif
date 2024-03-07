import React from 'react'
import Random from './components/Random'
import Tag from './components/Tag'

export default function App() {
  return (
    <div className=' relative  py-7 items-center flex-col background flex'>
      <div>
        <h1 className=' mx-auto py-2 xl:w-[1140px] w-[500px] lg:w-[1080px]  bg-white mt-5 text-center uppercase font-bold text-2xl'>Random gif</h1>
      </div>
      <div className='flex flex-col justify-center w-full items-center'>
        <Random></Random>
        <Tag></Tag>
      </div>
    </div>
  )
}
