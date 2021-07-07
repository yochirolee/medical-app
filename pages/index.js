import NavBar from "../components/navbar/navbar";
import Layout from "../templates/layout";
import SearchMainForm from "../components/forms/mainForm/searchMainForm";
import DoctorCard from "../components/cards/doctorCard";
import Bullets from "../components/bullets/bullets";
import Slider from "../components/sliders/slider";

export default function Home() {
  return (
    <Layout>
      <section id="navbar">
        <div className="h-16  flex justify-evenly items-center container mx-auto text-gray-500">
          <div>Logo</div>
          <menu className="w-1/3">
            <ul className="flex justify-between">
              <li>
                <a>REGISTRATE</a>
              </li>
              <li>
                <a>INICIO</a>
              </li>
              <li>
                <a>BLOG</a>
              </li>
            </ul>
          </menu>
          <button className="border rounded-3xl px-6 py-2  text-white bg-green">
            SOY UN PROFESIONAL MEDICO
          </button>
        </div>
      </section>
      <div className="h-screen bg-gradient ">
        <div className="container mx-auto pt-20 px-36 font-bold text-gray-500">
          <div name="main-text flex flex-col">
            <h1 className="text-4xl  w-2/4">
              Encuenta el doctor que necesitas con Guia Medica
            </h1>
            <h5 className="text-xl mt-2">
              Agenda Online o por llamada al
              <span className="ml-2 text-green-400">(+555) 111-1111</span>
            </h5>
          </div>
          <div name="main-search-container" className="ml-10">
            <ul className="flex mb-4  w-2/4 justify-evenly uppercase mt-10">
              <li>
                <a className="cursor-pointer hover:text-gray-400">
                  Consulta Presencial
                </a>
              </li>
              <li>
                <a className="cursor-pointer hover:text-gray-400">
                  Teleconsulta
                </a>
              </li>
            </ul>
            <div className="w-4/6 pr-4 flex place-items-center rounded-full h-20 bg-green-400  bg-opacity-10">
              <div className="h-12 flex  items-center  rounded-full bg-white w-full mx-5"></div>
              <div className="flex items-center justify-center w-14 h-12 rounded-full bg-green">
                <i className="las la-search text-2xl text-white transform -rotate-90 "></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
