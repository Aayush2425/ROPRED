import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/images/logo.png';

export const Header = () => {
  return (
    <div>
        <div className=' z-50 flex justify-between items-center shadow-md px-4 text-xl font-serif font-semibold'>
           <div className='flex items-center'>
            <img src={logo} alt="" className='w-20 h-20'/>
                <Link to="/" className='hover:cursor-pointer hover:text-gray-700 '>RoPred</Link>
           </div>
           <div className='flex gap-4'>
               <Link to="/search" className='hover:cursor-pointer hover:text-gray-700 '>QBot</Link>
                <Link to="/aboutus" className='hover:cursor-pointer hover:text-gray-700'>About</Link>
           </div>
        </div>
    </div>
  )
}
