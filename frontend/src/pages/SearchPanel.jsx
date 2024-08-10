import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import "../style/prompt.css";

export const SearchPanel = () => {
    const [sendRequest, setSendRequest] = useState({ text: "" });
    const [recieveResponse, setRecieveResponse] = useState();
    const [inputValue, setInputValue] = useState(''); 
    const [messages, setMessages] = useState([]); 

    const onSearch = () => {
        const requestText = sendRequest.text;

        // Add request to messages
        setMessages([...messages, { type: 'request', text: requestText }]);
        fetch("http://localhost:4000/text", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({"text":sendRequest})
        })
        .then((res) => {
            
            return res.json();
        })
        .then((res) => {
            console.log(res);
            setRecieveResponse(res); 
            setMessages([...messages, {type : 'response', text : res}])// Store response if needed
        })
        .catch((err) => {
            console.error('Fetch error:', err);
        });

        console.log(sendRequest);
    }

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
        setSendRequest({ text: e.target.value });
    }

    return (
        <div className='bg-black text-white h-screen w-screen'>
            <div>
                <div className='p-4 shadow-md shadow-gray-300 text-2xl font-serif font-bold'>
                    <Link to="/aboutus">RoPred</Link>
                </div>
            </div>
            <div className='prompt-box flex gap-3 h-2/3 w-2/3'>
                <ul className='msg-dialog'>
                    {messages.map((msg) => {
                        return (
                            <li className={msg.type == 'request' ? "text-end"  : "text-start"}>
                                {msg.text}
                            </li>
                        )
                    })}
                </ul>
            </div>
            <div className='flex justify-center items-center'>
                <div className='w-2/3 flex justify-between items-center m-3 px-4 rounded-full' style={{backgroundColor: '#232323'}}>
                    <input
                        type="text"
                        placeholder='enter your prompt here'
                        onChange={handleInputChange} 
                        className='w-full outline-none border-none focus:border-none focus:outline-none bg-transparent placeholder:text-white text-sm indent-1 p-4'
                    />
                    <div className='flex gap-4'>
                        <div>
                            <i className='fa fa-search hover:text-blue-400' onClick={onSearch}></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
