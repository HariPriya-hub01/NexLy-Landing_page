import { CheckCircle2 } from "lucide-react";
import { pricingOptions } from "../constants";
import { useRef, useEffect } from "react";
import { animatePricingCards } from "../animations/pricingAnimation";
import { animateBoardHeading } from "../animations/animateBoardHeading";

const Pricing = () => {
  const containerRef = useRef(null);
  const headingRef = useRef(null);

  useEffect(() => {
    animatePricingCards(containerRef);
  }, []);

  useEffect(() => {
    animateBoardHeading(headingRef);
  }, []);

  return (
    <div className="mt-20 px-4 sm:px-6 lg:px-10 xl:px-16">
      <h2 id="pricing"
        ref={headingRef}
        className="text-5xl sm:text-5xl lg:text-5xl pb-2 text-center tracking-wide mt-20 mb-10 origin-top dark:bg-gradient-to-b bg-gradient-to-bl from-red-600 to-yellow-500 dark:from-rose-500 dark:to-yellow-400 text-transparent bg-clip-text scroll-mt-24"
      >
        Pricing
      </h2>

      <div ref={containerRef} className="flex flex-wrap justify-center gap-4">
        {pricingOptions.map((option, index) => (
          <div key={index} className="w-full sm:w-[48%] lg:w-[30%] p-2 pricing-card">
            <div
              className={`p-8 sm:p-10 rounded-xl backdrop-blur-sm dark:bg-white/5 bg-white/50 border dark:border-neutral-700 border-neutral-300 transition-transform duration-300 hover:-translate-y-2 shadow-lg h-full flex flex-col justify-between ${
                option.title === "Pro" ? "scale-105 dark:shadow-orange-500/50 shadow-red-500/90 dark:border-yellow-400 border-yellow-500" : ""
              }`}
            >
              <div>
                {/* Title */}
                <p className="text-center text-2xl sm:text-3xl lg:text-4xl mb-6 font-semibold">
                  {option.title}
                  {option.title === "Pro" && (
                    <span className="block sm:inline bg-gradient-to-br from-red-500 to-yellow-500 dark:from-yellow-500 dark:to-orange-600 text-transparent bg-clip-text text-lg ml-1">
                      (Most Popular)
                    </span>
                  )}
                </p>

                {/* Price */}
                <p className="text-center mb-8">
                  <span className="text-4xl sm:text-5xl mr-2">{option.price}</span>
                  <span className="dark:text-neutral-400 dark:text-opacity-100 text-blue-950 text-opacity-60 text-base tracking-tight">/Month</span>
                </p>

                {/* Features */}
                <ul className="text-sm sm:text-base text-blue-950 text-opacity-70 dark:text-neutral-300">
                  {option.features.map((feature, i) => (
                    <li key={i} className="mt-4 flex items-center gap-2 leading-tight">
                      <CheckCircle2 className="dark:text-green-500 text-green-600 w-5 h-5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Button */}
              <a
                href="#"
                className="inline-flex justify-center items-center text-center w-full h-12 p-5 mt-10 tracking-tight text-base sm:text-lg dark:hover:bg-rose-500 border dark:border-rose-500/80 border-yellow-600/80 hover:bg-yellow-500 rounded-lg transition duration-200 shadow"
              >
                Subscribe
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
