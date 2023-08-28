"use client"
import { useState } from "react"
import { useRouter } from "next/navigation"

const AddTopic = () => {

    const [title,setTitle] = useState('')
    const [description, setDescription] = useState('')

    const router = useRouter();

   async function onSubmit(e){
        e.preventDefault();
        // alert( description)

        if(!title || !description)
        {
            alert("Title or Description can not be empty")
        }
        else{
            try{
                // await fetch("https://next-mongodb-zysg.vercel.app/api/topics/",{
                 const res = await fetch("/api/topics/",{
                    // const res = await fetch("http://localhost:3000/api/topics/",{
                    method:"POST",
                    headers:{
                        'Accept':'application/json',
                        'Content-Type':'application/json'
                    },
                    body: JSON.stringify({title:title, description:description})
                })

                if(res.ok){
                    router.push('/',function(){
                        console.log("reloading...")
                    })
                }else{
                    throw new Error('Failed to create a topic')
                }
    
               
            }
            catch(err)
            {
                console.log(err)
            }
        }
       
    }

  return (
    <>
        <form className='flex  flex-col gap-4 my-2 bg-slate-500 px-2 py-2' onSubmit={onSubmit}>
            <input
                className='border border-slate-500 px-8 py-2 focus:outline-none'
                placeholder='Topic Title'
                name="title"
                onChange={e=>setTitle(e.target.value)}
            />
            <textarea
                className='border border-slate-500 px-8 py-2 focus:outline-none'
                placeholder='Topic Description'
                name="description"
                onChange={e=>setDescription(e.target.value)}
            ></textarea>
            <div className='flex justify-center'>
                <button className='bg-zinc-800 font-bold text-lime-300 py-2 px-4 rounded' type='submit'>Submit</button>  
            </div>
        </form>
    </>
  )
}

export default AddTopic