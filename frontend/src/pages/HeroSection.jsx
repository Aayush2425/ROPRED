import React from 'react'
import { SparklesPreview } from '../Aceternity/SparklesPreview'
import { CoverDemo } from '../Aceternity/CoverDemo'
import Spline from '@splinetool/react-spline';
import '../style/hero.css';
import { AboutUs } from './AboutUs';
import { Header } from '../components/Header';
import { Link } from 'react-router-dom';

export const HeroSection = () => {
  return (
    <div className='m-0 flex h-screen text-white flex-col p-0 overflow-x-hidden bg-black'>
        <Header />
        <div className=' justify-center items-center w-screen m-0 p-0'  >
        <div class="lines">
            <div class="line"></div>
            <div class="line"></div>
            <div class="line"></div>
            <div class="line"></div>
            <div class="line"></div>
        </div>
            <SparklesPreview />
        </div>
    </div>
  )
}
