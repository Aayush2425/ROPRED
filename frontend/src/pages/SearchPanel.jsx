import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import "../style/prompt.css";

export const SearchPanel = () => {

    const [sendRequest, setSendRequest] = useState();
    const [recieveResponse, setRecieveResponse] = useState();

    // const addMessage = () => {
    //     addEventListener('send', )
    // }

  return (
    <div className='bg-black text-white h-screen w-screen'>
        <div>
            <div className='p-4 shadow-md shadow-gray-300 text-2xl font-serif font-bold'><Link to="/aboutus">RoPred</Link></div>
        </div>
        <div className='prompt-box flex gap-3 h-2/3 w-2/3'>
            <ul className='msg-dialog'>
                <li className='msg'> 

                </li>
            </ul>
        </div>
        <div className='flex justify-center items-center'>
            <div className='w-2/3 flex  justify-between items-center m-3 px-4 rounded-full' style={{backgroundColor: '#232323'}}><input type="text" placeholder='enter your prompt here' className='w-full outline-none border-none focus:border-none focus:outline-none bg-transparent placeholder:text-white text-sm indent-1 p-4'/>
            <div className='flex gap-4'>
                <div><i className='fa fa-file hover:text-blue-400'></i></div>
                <div><i className='fa fa-photo hover:text-blue-400'></i></div>
                <div><i className='fa fa-camera hover:text-blue-400'></i></div>
                <div><i className='fa fa-search  hover:text-blue-400'></i></div>
            </div>
            </div>
        </div>
    </div>
  )
}
