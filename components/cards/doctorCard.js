import Link from "next/link";
export default function DoctorCard() {
  return (
    <Link href="doctorDetails">
      <div className="card flex flex-col items-center bg-gray-50 shadow-lg rounded-xl cursor-pointer">
        <div className="relative w-full">
          <i className="absolute las la-check-circle text-2xl text-green-500 right-2 top-2"></i>
        </div>
        <img
          src="images/doctor.jfif"
          className="mt-4 object-cover h-40 w-32 rounded-full  shadow-lg"
        />
        <div className="flex mt-2">
          <span className="text-gray-500 font-bold mr-1">Dr</span>
          <h3>Juan Gomez</h3>
        </div>

        <p className="text-green-500">Pediatra</p>
        <div className="flex items-center mb-2">
          <i className="las la-heart mr-2 text-red-500"></i>
          <p>230</p>
        </div>
      </div>
    </Link>
  );
}
