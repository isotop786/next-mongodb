import React from 'react'

const EditTopic = () => {
  return (
    <>
        <form className='flex flex-col gap-4 my-2'>
            <input
                className='border border-slate-500 px-8 py-2 focus:outline-none'
                placeholder='Topic Title'
            />
            <textarea
                className='border border-slate-500 px-8 py-2 focus:outline-none'
                placeholder='Topic Description'
            ></textarea>
            <div className='flex justify-center'>
                <button className='bg-yellow-400 font-bold text-dark py-2 px-4 rounded' type='submit'>Edit</button>  
            </div>
        </form>
    </>
  )
}

export default EditTopic