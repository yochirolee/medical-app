export default function SliderBullets({
  bullets,
  handleActiveStep,
  activeStep,
}) {
  return (
    <div className="lg:flex grid grid-cols-1 lg:-mt-10 -mt-40  relative place-items-end mr-10 md:mr-16  ">
      <div className="slider-bullets lg:mx-auto  flex  w-20 lg:w-1/5 justify-between items-center">
        <i
          className="las la-angle-left hidden lg:block pr-2 cursor-pointer lg:text-white text-blue-500 lg:text-2xl font-bold"
          onClick={() => handleActiveStep(activeStep - 1)}
        ></i>
        {bullets.map((bullet) => (
          <span
            key={bullet.id}
            className={`rounded-full cursor-pointer  lg:bg-white bg-blue-500 h-2 w-2 lg:h-3 lg:w-3 ${
              activeStep === bullet.id ? "opacity-100 " : "opacity-20 "
            }`}
            onClick={() => handleActiveStep(bullet.id)}
          ></span>
        ))}

        <i
          className="las la-angle-right pl-2 hidden lg:block cursor-pointer lg:text-white text-blue-500 lg:text-2xl font-extrabold "
          onClick={() => handleActiveStep(activeStep + 1)}
        ></i>
      </div>
    </div>
  );
}
