import NavBar from "../components/navbar/navbar";
import Layout from "../templates/layout";
import SearchMainForm from "../components/forms/mainForm/searchMainForm";
import DoctorCard from "../components/cards/doctorCard";
import Bullets from "../components/bullets/bullets";

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
            <div className="cards-container  px-2 grid grid-cols-2  gap-2">
              <DoctorCard />
              <DoctorCard />
            </div>

           <Bullets/>
          </div>
        </div>
      </section>
    </Layout>
  );
}
