"use client";
import { AboutUsAnime } from "../Aceternity/AboutUsAnime.jsx";
import { Header } from "../components/Header.jsx";
import rocket from "../assets/images/rocket.png";
import chat from "../assets/images/chat.png";
import chat_2 from "../assets/images/chat_2.png";

export function AboutUs() {
  return (
    <>
        <div className="bg-black text-white overflow-x-hidden">
            <Header />
            <AboutUsAnime />
            <div className="overflow-hidden h-screen w-screen">
                <div className=" absolute "><img src={rocket} className=" h-screen w-screen"/></div>
                <div className="h-screen w-screen relative opacity-80 bg-black flex justify-center text-3xl font-bold text-start flex-col gap-3"><span className="text-4xl ms-10 font-serif text-blue-500">Rocket Launch Recommendation System</span><span className="w-2/3 ms-10">Based on the payload, target orbit, and mission objectives, the model recommends the most suitable rocket configuration. This includes suggestions on fuel types, stage setups, and any necessary adjustments to the rocket's design to meet mission criteria.</span></div>
            </div>
            <div className="overflow-hidden h-screen w-screen">
                <div className=" absolute "><img src={chat} className=" h-screen w-screen"/></div>
                <div className="h-screen w-screen relative opacity-80 bg-black flex justify-center text-3xl font-bold text-start flex-col gap-3"><span className="text-4xl ms-10 font-serif text-blue-500">Rocket Launch AI Talk</span><span className="w-2/3 ms-10">The Gemini chat box serves as an interactive interface within the platform, allowing users to ask questions, make requests, and receive real-time responses. It leverages the power of AI to provide accurate and context-aware answers.</span></div>
            </div>
        </div>

    </>
  );
}
