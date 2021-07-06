import { useRef, useState, useEffect } from "react";
import SliderBullets from "./sliderBullets";
import SliderStep from "./sliderSteps/sliderStep";
import { sliderData } from "../../assets/data";

export default function Slider() {
  const sliderRefWidth = useRef(0);

  const [value, setValue] = useState(0);
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    setValue(-sliderRefWidth.current.offsetWidth * activeStep);
  }, [activeStep]);

  const handleActiveStep = (step) => {
    if (step >= 0 && step <= sliderData.length - 1) setActiveStep(step);
  };

  return (
    <div
      ref={sliderRefWidth}
      className="slider  rounded-xl  overflow-x-hidden "
    >
      <div
        className="flex slick-list h-full transition duration-500 ease-in"
        style={{ transform: `translate3D(${value}px, 0px,0px)` }}
      >
        {sliderData.map((content) => (
          <SliderStep key={content.id} content={content} />
        ))}
      </div>
      <SliderBullets
        bullets={sliderData}
        handleActiveStep={handleActiveStep}
        activeStep={activeStep}
      />
    </div>
  );
}
