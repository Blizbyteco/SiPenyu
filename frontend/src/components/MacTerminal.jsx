import React from 'react'

export default function MacTerminal({children}) {

  return (
    <div className='rounded-md overflow-hidden w-full shadow-md max-w-[1200px] mx-auto'>
        <div className='flex gap-x-2 bg-[#222222] w-full p-3'>
          <div className='bg-red-500 rounded-full size-3'></div>
          <div className='bg-yellow-500 rounded-full size-3'></div>
          <div className='bg-green-500 rounded-full size-3'></div>
        </div>
        <div className='bg-white p-4'>
         {children}
        </div>
    </div>
  )
}
