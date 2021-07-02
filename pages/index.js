import NavBar from "../components/navbar/navbar";
import Layout from "../templates/layout";
import SearchMainForm from "../components/forms/mainForm/searchMainForm";

export default function Home() {
  return (
    <Layout>
      <NavBar />
      <section name="main-form">
        <div className="container mx-auto  p-4">
          <h1 className="text-xl font-bold text-gray-700">Programar Cita</h1>
          <SearchMainForm />
        </div>
      </section>

      <section name="doctors-cards">
        <div style={{ background: "url(svg/waves.svg) no-repeat  " }}>
          <div name="cards-container" className="mx-4">
            <h1 className="text-xl font-bold text-gray-700 mb-2">Doctores</h1>
            <div className="cards-container  px-2 grid grid-cols-2 gap-2">
              <div className="card flex flex-col items-center bg-gray-50 shadow-lg rounded-xl">
                <div className="relative w-full">
                  <i className="absolute las la-shield-alt text-2xl text-green-500 right-2 top-2"></i>
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

              <div className="card flex flex-col items-center bg-gray-50 shadow-lg rounded-xl">
                <div className="relative w-full">
                  <i className="absolute las la-shield-alt text-2xl text-green-500 right-2 top-2"></i>
                </div>
                <img
                  src="images/doctora.jfif"
                  className="mt-4 object-cover h-40 w-32 rounded-full  shadow-lg"
                />
                <div className="flex mt-2">
                  <span className="text-gray-500 font-bold mr-1">Dr</span>
                  <h3>Esperanza Perez</h3>
                </div>

                <p className="text-green-500">Pediatra</p>
                <div className="flex items-center mb-2">
                  <i className="las la-heart mr-2 text-red-500"></i>
                  <p>230</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
