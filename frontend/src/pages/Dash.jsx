import React from 'react'
import { Header } from '../components/Header'

function Dash() {
  return (
    <div className='w-screen h-screen'>
        <Header />
        <iframe src='http://localhost:8050' width="100%" height="100%" />
    </div>
  )
}

export default Dash