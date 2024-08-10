import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "../style/prompt.css";
import { Header } from '../components/Header';
import "../style/search.css";

export const SearchPanel = () => {
    const [sendRequest, setSendRequest] = useState({ text: "" });
    const [recieveResponse, setRecieveResponse] = useState();
    const [inputValue, setInputValue] = useState(''); 
    const [messages, setMessages] = useState([]); 

    const onSearch = () => {
        const requestText = sendRequest.text;

        // Add the request message
        setMessages(prevMessages => [...prevMessages, { type: 'request', text: requestText }]);
        
        fetch("http://localhost:4000/chat", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(sendRequest)
        })
        .then((res) => res.json())
        .then((res) => {
            console.log(res);
            setRecieveResponse(res);

            // Add the response message
            setMessages(prevMessages => [...prevMessages, { type: 'response', text: res }]);
        })
        .catch((err) => {
            console.error('Fetch error:', err);

            // Add an error message if the fetch fails
            setMessages(prevMessages => [...prevMessages, { type: 'response', text: 'Error: Failed to fetch' }]);
        });

        console.log(sendRequest);
        setInputValue('');  // Clear the input field after sending the request
    }

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
        setSendRequest({ text: e.target.value });
    }

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            onSearch();
        }
    }

    return (
        <div className='bg-black text-white h-screen w-screen'>
            <Header />
            <div className='flex gap-3 h-2/3 justify-center '>
                <div className='prompt-box shadow-md w-2/3 overflow-y-auto'>
                    <ul className='msg-dialog'>
                        {messages.map((msg, index) => (
                            <li key={index} className={msg.type === 'request' ? "float-end bg-gray-500 px-4 py-2 w-fit max-w-3xl rounded-xl mr-3 clear-both mb-3" : "ml-3 text-start bg-blue-500 px-4 py-2 w-fit rounded-xl max-w-3xl clear-both mb-3"}>
                                {msg.text}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className='flex justify-center items-center'>
                <div className='w-2/3 flex justify-between items-center m-3 px-6 py-2 rounded-full' style={{backgroundColor: '#232323'}}>
                    <input
                        type="text"
                        placeholder='enter your prompt here'
                        value={inputValue}
                        onChange={handleInputChange}
                        onKeyDown={handleKeyPress}  // Listen for key press events
                        className='w-full outline-none border-none focus:border-none focus:outline-none bg-transparent placeholder:text-white text-lg p-3'
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
