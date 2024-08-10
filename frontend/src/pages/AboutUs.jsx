"use client";
import { motion } from "framer-motion";
import { HeroHighlight } from "../Aceternity/HeroHighlight.tsx";

export function AboutUs() {
  return (
    <>
            <HeroHighlight>
        <motion.h1
            initial={{
            opacity: 0,
            y: 20,
            }}
            animate={{
            opacity: 1,
            y: [20, -5, 0],
            }}
            transition={{
            duration: 0.5,
            ease: [0.4, 0.0, 0.2, 1],
            }}
            className="text-3xl px-4 font-bold  text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto "
        >
            Developing a machine learning model to predict the success of rocket launches based on key features such as rocket specifications, weather conditions, launch site characteristics, and historical launch data. The project involves data collection, preprocessing, feature engineering, and the application of classification algorithms like logistic regression and decision trees to accurately forecast launch outcomes.
            
        </motion.h1>
        </HeroHighlight>
        
    </>
  );
}
