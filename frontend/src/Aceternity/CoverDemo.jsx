import React from "react";
import { Cover } from "./cover.tsx";

export function CoverDemo() {
  return (
    <div className="">
      <h1 className="font-semibold w-3/4 text-center mt-6 relative z-20 py-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white">
      <div className="text-lg"><Cover>Developing a machine learning model to predict the success of rocket launches based on key features such as rocket specifications, weather conditions, launch site characteristics, and historical launch data. The project involves data collection, preprocessing, feature engineering, and the application of classification algorithms like logistic regression and decision trees to accurately forecast launch outcomes.</Cover></div>
      </h1>
    </div>
  );
}
