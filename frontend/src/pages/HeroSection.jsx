import React from 'react'
import { SparklesPreview } from '../Aceternity/SparklesPreview'
import { CoverDemo } from '../Aceternity/CoverDemo'
import Spline from '@splinetool/react-spline';
import '../style/hero.css';
import heroRocket from "../assets/images/rocket.png";
import slv from "../assets/images/SLV.jpg";
import aslv from "../assets/images/ASLV(2).jpg";
import gslv from "../assets/images/GSLV.jpg";
import LVM from "../assets/images/LVM 3.jpg";
import pslvdl from "../assets/images/PSLV-DL.jpg";
import sslv from "../assets/images/SSLV.jpg";
import tvd1 from "../assets/images/TV-D1.jpg";
import { AboutUs } from './AboutUs';

export const HeroSection = () => {
  return (
    <div className='m-0 flex text-white flex-col p-0 overflow-x-hidden bg-black'>
        <div className='h-screen justify-center items-center w-screen m-0 p-0'  style={{backgroundImage: `${heroRocket}`, backgroundSize: 'cover'}}>
        <div class="lines">
            <div class="line"></div>
            <div class="line"></div>
            <div class="line"></div>
            <div class="line"></div>
            <div class="line"></div>
        </div>

            <SparklesPreview />
        </div>
        {/* <div className='h-screen flex items-center'>
            <AboutUs />
        </div> */}
        <div className='h-fit flex justify-center gap-10 p-10'>
            <div className='grid grid-cols-4 justify-center gap-5'>
                
                <div className='w-52 hover:scale-110  transition  '>
                    <img src={slv} alt="" className="h-60 w-full"/>
                    <p><abbr className='no-underline' title="The Satellite Launch Vehicle or SLV was a small-lift launch vehicle project started in the early 1970s by the Indian Space Research Organisation to develop the technology needed to launch satellites. SLV was intended to reach a height of 400 kilometres (250 mi) and carry a payload of 40 kg (88 lb). The first experimental flight of SLV, in August 1979, was a failure. The first successful launch took place on 18 July 1980.">SLV-3 - Developmental Flight.</abbr></p>
                </div>
                <div className='w-52 hover:scale-110  transition  '>
                    <img src={aslv} alt="" className="h-60 w-full"/>
                    <p><abbr className='no-underline' title="The Augmented Satellite Launch Vehicle or Advanced Satellite Launch Vehicle (also known as ASLV) was a small-lift launch vehicle five-stage solid-fuel rocket developed by the Indian Space Research Organisation (ISRO) to place 150 kg satellites into LEO.[1] This project was started by India during the early 1980s to develop technologies needed for a payload to be placed into a geostationary orbit. Its design was based on Satellite Launch Vehicle. ISRO did not have sufficient funds for both the Polar Satellite Launch Vehicle programme and the ASLV programme at the same time and the ASLV programme was terminated after the initial developmental flights. The payloads of ASLV were Stretched Rohini Satellites.">ASLV - SROSS-C2 launched.</abbr></p>
                </div>
                <div className='w-52 hover:scale-110  transition  '>
                    <img src={gslv} alt="" className="h-60 w-full"/>
                    <p><abbr className='no-underline' title="Geosynchronous Satellite Launch Vehicle (GSLV) is a class of expendable launch systems operated by the Indian Space Research Organisation (ISRO). GSLV has been used in fifteen launches since 2001.">GSLV - MK 2 - Launch of EOS-03.</abbr></p>
                </div>
                <div className='w-52 hover:scale-110  transition  '>
                    <img src={LVM} alt="" className="h-60 w-full"/>
                    <p><abbr className='no-underline' title="The Launch Vehicle Mark-3 or LVM3 (previously referred as the Geosynchronous Satellite Launch Vehicle Mark III or GSLV Mk III) is a three-stage medium-lift launch vehicle developed by the Indian Space Research Organisation (ISRO). Primarily designed to launch communication satellites into geostationary orbit,it is also due to launch crewed missions under the Indian Human Spaceflight Programme. LVM3 has a higher payload capacity than its predecessor, GSLV.">LVM - Carried 36 OneWeb Satellites. </abbr></p>
                </div>
                <div className='w-52 hover:scale-110  transition  '>
                    <img src={pslvdl} alt="" className="h-60 w-full"/>
                    <p><abbr className='no-underline' title="The Polar Satellite Launch Vehicle (PSLV) is an expendable medium-lift launch vehicle designed and operated by the Indian Space Research Organisation (ISRO). It was developed to allow India to launch its Indian Remote Sensing (IRS) satellites into Sun-synchronous orbits, a service that was, until the advent of the PSLV in 1993, only commercially available from Russia. PSLV can also launch small size satellites into Geostationary Transfer Orbit (GTO).">PSLV - Launch of the Aditya-L1 scientific mission</abbr></p>
                </div>
                <div className='w-52 hover:scale-110  transition  '>
                    <img src={sslv} alt="" className="h-60 w-full"/>
                    <p><abbr className='no-underline' title="The Augmented Satellite Launch Vehicle or Advanced Satellite Launch Vehicle (also known as ASLV) was a small-lift launch vehicle five-stage solid-fuel rocket developed by the Indian Space Research Organisation (ISRO) to place 150 kg satellites into LEO.[1] This project was started by India during the early 1980s to develop technologies needed for a payload to be placed into a geostationary orbit. Its design was based on Satellite Launch Vehicle. ISRO did not have sufficient funds for both the Polar Satellite Launch Vehicle programme and the ASLV programme at the same time and the ASLV programme was terminated after the initial developmental flights. The payloads of ASLV were Stretched Rohini Satellites.">SSLV - Launch of EOS-07 and two other satellites</abbr></p>
                </div>
                <div className='w-52 hover:scale-110 transition' >
                    <img src={tvd1} alt="" className="h-60 w-full"/>
                    <p><abbr className='no-underline' title="Test Vehicle Abort Mission-1 (TV-D1) was a high altitude abort test performed as part of the Gaganyaan program, initially set to be held on 21 October 2023 at around 02:30 UTC (08:00 IST). Liftoff was delayed to 03:15 UTC due to weather issues, and five seconds before launch it was put on hold by the on-board computer due to an engine anomaly, as reported in ISRO's mission livestream. The launch occurred at 04:30 UTC, and the crew module successfully separated from the launch vehicle. The crew module was successfully recovered by the Indian Navy. India is the fourth country, after Russia, the United States, and China, to successfully test this technology.">TV-D1 - Suborbital. High altitude abort test for the Gaganyaan crew spacecraft.</abbr></p>
                </div>
            </div>
        </div>
    </div>
  )
}
