import React from 'react'


function submitHandler()
{
    console.log(0)
}

const AddTopic = () => {

  

  return (
    <>
        <form className='flex flex-col gap-4 my-2' onSubmit={submitHandler()}>
            <input
                className='border border-slate-500 px-8 py-2 focus:outline-none'
                placeholder='Topic Title'
            />
            <textarea
                className='border border-slate-500 px-8 py-2 focus:outline-none'
                placeholder='Topic Description'
            ></textarea>
            <div className='flex justify-center'>
                <button className='bg-green-600 font-bold text-white py-2 px-4 rounded' type='submit'>Submit</button>  
            </div>
        </form>
    </>
  )
}

export default AddTopic