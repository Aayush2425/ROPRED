"use client";
import { AboutUsAnime } from "../Aceternity/AboutUsAnime.jsx";
import { Header } from "../components/Header.jsx";
import rocket from "../assets/images/rocket.png";

export function AboutUs() {
  return (
    <>
        <div className="bg-black text-white overflow-x-hidden">
            <Header />
            <AboutUsAnime />
            <div className="overflow-hidden">
                <div className="h-screen w-screen absolute "><img src={rocket} alt="" className="absolute h-full w-full"/></div>
                <div className="h-screen w-screen relative opacity-80 bg-black flex justify-center items-center text-xl">The project involves creating a platform that processes satellite imagery using machine learning to identify specific patterns such as deforestation, crop health, urban expansion, or natural disasters. As part of the user interaction, a Gemini chat box is implemented to facilitate real-time communication with users, providing insights and answers based on their queries.</div>
            </div>
        </div>

    </>
  );
}
