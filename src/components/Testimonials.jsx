import { useEffect, useRef } from "react";
import { testimonials } from "../constants";
import { animateTestimonials } from "../animations/testimonialsScroll";
import { animateTestimonialsHeading } from "../animations/testimonialsHeadingAnimation";

const Testimonials = () => {
  const headingRef = useRef(null);

  useEffect(() => {
    animateTestimonials();
  }, []);

  useEffect(() => {
    animateTestimonialsHeading(headingRef);
  }, []);

  return (
    <div className="mt-20 overflow-hidden">
      <h2 id="testimonials" ref={headingRef} className="text-3xl sm:text-2xl lg:text-6xl text-center my-10 lg:my-20 scroll-mt-24">
        What People are saying
      </h2>

      <div className="testimonial-row flex w-max gap-6 px-6">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="testimonial-card min-w-[300px] sm:min-w-[350px] max-w-xs bg-white dark:bg-neutral-900 rounded-md p-6 border dark:border-neutral-800 border-orange-500 text-sm font-light dark:text-neutral-200 text-black "
          >
            <p className="line-clamp-6 leading-relaxed">{testimonial.text}</p>
            <div className="flex mt-6 items-start">
              <img
                className="w-10 h-10 mr-4 rounded-full border border-neutral-300"
                src={testimonial.image}
                alt={testimonial.user}
              />
              <div>
                <h6 className="font-medium">{testimonial.user}</h6>
                <span className="text-xs italic text-neutral-500">{testimonial.company}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
