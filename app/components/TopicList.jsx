import React from 'react'
import RemoveBtn from './RemoveBtn'
import Link from 'next/link'
import {HiPencilAlt} from 'react-icons/hi'

const getTopics = async ()=>{
    try{
        const res = await fetch('https://next-mongodb-zysg.vercel.app/api/topics/')
        // const res = await fetch('http://localhost:3000/api/topics', {cache:"no-store"})

        if(!res.ok)
        {
            throw new Error('Failed to fetch data');
        }

        return res.json();
    }
    catch(err)
    {
        console.log("topics fetching error is:"+err)
    }
}

const TopicList = async () => {
    const {topics} = await getTopics();
    
   
  return (
    <>
    {topics.map((t)=>(
        <div key={t._id} className='
        p-4 border border-slate-300
        flex justify-between gap-5 items-start content-center px-3 py-2 my-2 bg-lime-50'>
            <div>
                <h2 className='font-bold text-2xl'>{t.title}</h2>
                <div>Topic Description</div>
            </div>

            <div className='flex justify-between items-center'>
                <RemoveBtn/>
                <Link className='px-2' title='Edit' href={`/editTopic/${t._id}`}><HiPencilAlt size={24} /></Link>
            </div>
        </div>
    ))}
        
    </>
  )
}

export default TopicList