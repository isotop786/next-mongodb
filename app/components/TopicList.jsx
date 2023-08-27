import React from 'react'
import RemoveBtn from './RemoveBtn'
import Link from 'next/link'
import {HiPencilAlt} from 'react-icons/hi'

const TopicList = () => {
  return (
    <>
        <div className='
        p-4 border border-slate-300
        flex justify-between gap-5 items-start content-center px-3 py-2 my-2 bg-lime-50'>
            <div>
                <h2 className='font-bold text-2xl'>Topic Title</h2>
                <div>Topic Description</div>
            </div>

            <div className='flex justify-between items-center'>
                <RemoveBtn/>
                <Link className='px-2' title='Edit' href={'/editTopic/123'}><HiPencilAlt size={24} /></Link>
            </div>
        </div>
    </>
  )
}

export default TopicList