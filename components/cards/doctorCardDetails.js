export default function DoctorCardDetails() {
  return (
    <div className="card flex flex-col mt-3 items-center bg-gray-50 shadow-lg rounded-xl">
      <div className="relative w-full">
        <i className="absolute las la-check-circle text-2xl text-green-500 right-2 top-2"></i>
      </div>
      <div className=" grid grid-cols-2 w-full py-2  ">
        <img
          src="images/doctor.jfif"
          className="mt-4 object-cover h-40 w-32 rounded-full ml-2  shadow-lg"
        />
        <div className="flex flex-col mt-4">
          <div className="flex">
            <span className="text-gray-500 font-bold mr-1">Dr</span>
            <h3>Juan Gomez</h3>
          </div>
          <p className="text-green-500 ">Pediatra</p>
          <div className="flex items-center mt-3 text-gray-500">
            <i className="la la-whatsapp mr-2"></i>
            <p>(555) 555-5555</p>
          </div>
          <div className="flex items-center text-gray-500">
            <i className="la la-phone mr-2"></i>
            <p>(555) 555-5555</p>
          </div>
          <div className="mt-3 flex ">
            <button className="rounded-full h-8 flex items-center  p-2 px-4 bg-gray-700 text-white  font-bold hover:bg-gray-500 cursor-pointer">
              Agendar Cita
            </button>
          </div>
        </div>
      </div>
      <div className="flex w-full mt-3 justify-evenly">
        <div className="flex items-center mb-2">
          <i className="las la-dollar-sign mr-2 text-green-500"></i>
          <p>230</p>
        </div>
        <div className="flex items-center mb-2">
          <i className="las la-heart mr-2 text-red-500"></i>
          <p>230</p>
        </div>
        <div className="flex items-center mb-2">
          <i className="las la-map-marker mr-2 text-gray-500"></i>
          <p>Quito</p>
        </div>
      </div>
    </div>
  );
}
