import { features } from "../constants/index";
import { useRef, useEffect } from "react";
import { spreadCards } from "../animations/spreadCards";

const FeaturesSection = () => {
  const cardsRef = useRef([]);
  const containerRef = useRef(null);

  useEffect(() => {
    cardsRef.current = cardsRef.current.slice(0, features.length);
    spreadCards(cardsRef, containerRef);
  }, []);

  return (
    <div id="features"
      ref={containerRef}
      className="relative mt-20 border-b border-orange-800 dark:border-neutral-800 min-h-[500px] pb-10 scroll-mt-24"
    >
      <div className="text-center">
        <span className="dark:bg-neutral-900  dark:text-yellow-500 text-red-700 rounded-full h-6 text-sm font-medium px-3 py-1 uppercase">
          Features
        </span>
        <h2 className="text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking-wide">
          Powerful Features for{" "}
          <span className="bg-gradient-to-br from-red-600 to-yellow-500  dark:from-rose-500 dark:to-yellow-500 text-transparent bg-clip-text">
            Modern Teams
          </span>
        </h2>
      </div>
      <div className="flex flex-wrap mt-10 lg:mt-20">
        {features.map((feature, index) => (
          <div
            key={index}
            className="w-full sm:w-1/2 lg:w-1/3 transform-gpu px-4 mb-10"
            ref={(el) => (cardsRef.current[index] = el)}
          >
            <div className="flex">
              <div className="flex mx-6 h-10 w-10 p-2 dark:bg-neutral-900 text-orange-700 justify-center items-center rounded-full mb-4">
                {feature.icon}
              </div>
              <div>
                <h5 className="mt-1 mb-6 text-xl">{feature.text}</h5>
                <p className="text-md p-2 mb-10 text-blue-950 text-opacity-60 dark:text-neutral-500 dark:text-opacity-100">
                  {feature.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturesSection;
