import React from 'react'
import {HiOutlineTrash} from 'react-icons/hi'

const RemoveBtn = ({id}) => {
  return (
    <button title='Delete?' className='px-2'>
        <HiOutlineTrash size={24} color='pink'/>
    </button>
  )
}

export default RemoveBtn