import React from 'react'
import {HiOutlineTrash} from 'react-icons/hi'

const RemoveBtn = () => {
  return (
    <button title='Delete?' className='px-2'>
        <HiOutlineTrash size={24} color='red'/>
    </button>
  )
}

export default RemoveBtn