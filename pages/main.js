import NavBar from "../components/navbar/navbar";
import Layout from "../templates/layout";
import SearchMainForm from "../components/forms/mainForm/searchMainForm";
import DoctorCard from "../components/cards/doctorCard";
import Bullets from "../components/bullets/bullets";
import Slider from "../components/sliders/slider";

export default function Main() {
  return (
    <Layout>
      <NavBar />
      <div className="md:hidden">
        <section name="main-form ">
          <div className="container mx-auto  p-4">
            <h1 className="text-xl font-bold text-gray-700">Programar Cita</h1>
            <SearchMainForm />
          </div>
        </section>

        <section name="doctors-cards " className="w-full">
          <div style={{ background: "url(svg/waves.svg) no-repeat  " }}>
            <div name="cards-container " className="mx-4  ">
              <h1 className="text-xl font-bold text-gray-700 mb-2">Doctores</h1>
              <div className="cards-container  px-2 grid grid-cols-2 md:grid-cols-6   gap-2">
                <DoctorCard />
                <DoctorCard />
              </div>

              <Bullets />
            </div>
          </div>
        </section>
      </div>

      <div className=" mx-auto container mt-6 h-screen    ">
        <div className="relative flex h-1/2     ">
          <Slider />
          <div className=" absolute w-1/3 right-4 top-20 ">
            <SearchMainForm />
          </div>
        </div>

        <div className="mt-10">
          <h2 className="text-gray-700 font-bold text-xl ">
            Nuestros Doctores
          </h2>
          <div className="container mx-auto mt-10 flex justify-evenly">
            <div className="w-1/6">
              <DoctorCard></DoctorCard>
            </div>
            <div className="w-1/6">
              <DoctorCard></DoctorCard>
            </div>
            <div className="w-1/6">
              <DoctorCard></DoctorCard>
            </div>
            <div className="w-1/6">
              <DoctorCard></DoctorCard>
            </div>
            <div className="w-1/6">
              <DoctorCard></DoctorCard>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
