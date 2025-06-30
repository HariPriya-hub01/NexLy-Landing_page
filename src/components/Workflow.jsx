import designVideo from "../assets/designVideo.mp4";
import WorkflowHeading from "./WorkflowHeading";
import { checklistItems } from "../constants";
import { useEffect, useRef } from "react";
import { animateWorkflowItems } from "../animations/workflowAnimation";

const Workflow = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    animateWorkflowItems(sectionRef);
  }, []);

  return (
    <div ref={sectionRef} className="mt-32 px-6 lg:px-16">
      <WorkflowHeading />
      <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
        
        {/* Checklist */}
        <div className="w-full lg:w-7/12 space-y-12 lg:pl-10">
          {checklistItems.map((item, index) => (
            <div key={index} className="flex items-start checklist-item">
              <div className="dark:bg-neutral-900 p-3 rounded-full mr-4">{item.icon}</div>
              <div>
                <h5 className="text-xl mb-2">{item.title}</h5>
                <p className="dark:text-neutral-500 dark:text-opacity-100 text-blue-950 text-opacity-60 text-md">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* video */}
        <div className="w-full lg:w-5/12">
          <video
            src={designVideo}
            autoPlay
            muted
            loop
            playsInline
            className="md:h-[600px] md:px-[150px] lg:h-[600px] lg:px-[15px] object-cover rounded-3xl"
          />
        </div>
      </div>
    </div>
  );
};

export default Workflow;
