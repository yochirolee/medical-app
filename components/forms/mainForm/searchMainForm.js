export default function SearchMainForm() {
  return (
    <div className="   bg-gray-100 p-10 rounded-xl ">
      <form className="w-11/12 mx-auto">
        <div className="relative my-2">
          <i className="absolute las la-search text-2xl top-2 left-3 "></i>
          <input
            type="text"
            className="h-12 border rounded-3xl w-full pl-12"
            placeholder="Nombre o Especialidad"
          ></input>
        </div>
        <div className="relative my-2">
          <i className="absolute las la-map-marker text-2xl top-2 left-3 "></i>
          <i className="absolute las la-angle-down  top-4 right-4 "></i>
          <input
            type="text"
            className="h-12 border rounded-3xl w-full pl-12"
            placeholder="Ubicacion"
          ></input>
        </div>
        <div className="relative my-2">
          <i className="absolute las la-user-shield text-2xl top-2 left-3 "></i>
          <i className="absolute las la-angle-down  top-4 right-4 "></i>
          <input
            type="text"
            className="h-12 border rounded-3xl w-full pl-12"
            placeholder="Seguro (Opcional)"
          ></input>
        </div>
      </form>
    </div>
  );
}
