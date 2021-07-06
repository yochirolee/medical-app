export default function SliderStep({ content }) {
  return (
    <div
      className="slider min-w-full    flex flex-col justify-center     bg-no-repeat "
      style={{
        backgroundImage: `url(${content.picture})`,
        repeat: "no-repeat",
      }}
    >
      <div className=" flex flex-col  p-4 lg:justify-around       ">
        <h2 className="font-bold text-gray-00   lg:font-bold lg:text-5xl text-2xl">
          {content.title}
        </h2>
        <h4 className=" text-gray-700 lg:font-bold lg:text-xl pt-4 h-10">
          {content.description}
        </h4>
        <button className=" text-white lg:font-bold   lg:p-2 lg:w-44 w-24 h-10 lg:h-12 bg-gradient-to-b from-green-400 via-green-500 to-green-600 rounded-md lg:rounded-lg mt-10">
          {content.buttonText}
        </button>
      </div>
    </div>
  );
}
