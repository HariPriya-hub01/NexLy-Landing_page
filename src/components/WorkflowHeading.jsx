import { useEffect, useRef } from "react";
import { animateHeading } from "../animations/headingAnimation";

const WorkflowHeading = () => {
  const headingRef = useRef(null);
  const spanRef = useRef(null);

  useEffect(() => {
    animateHeading(headingRef, spanRef);
  }, []);

  return (
    <h2 id="design" ref={headingRef} className="text-3xl sm:text-5xl lg:text-6xl text-center mb-20 md:tracking-wide scroll-mt-24">
      Your entire workflow.
      <span
        ref={spanRef}
        className="block md:ml-10 md:mt-4 sm:ml-20 lg:ml-28 bg-gradient-to-r from-red-600 to-yellow-500 dark:from-rose-500 dark:to-yellow-400 text-transparent bg-clip-text"
      >
        One powerful space.
      </span>
    </h2>
  );
};

export default WorkflowHeading;
