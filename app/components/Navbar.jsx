
import Link from 'next/link'
import React from 'react'

function Navbar() {
  return (
    <nav className='flex justify-between items-center bg-slate-800 px-8 py-3'>
        <Link className='text-white font-bold text-2xl' href={"/"}>NextMongo</Link>
        <Link className='bg-white font-bold p-2 rounded-sm' href={"/addTopic"}>Add Topic</Link>
    </nav>
  )
}

export default Navbar