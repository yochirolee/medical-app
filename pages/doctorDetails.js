import Layout from "../templates/layout";
import NavBar from "../components/navbar/navbar";
import SearchMainForm from "../components/forms/mainForm/searchMainForm";
import DoctorCardDetails from "../components/cards/doctorCardDetails";

export default function DoctorDetails() {
  return (
    <Layout>
      <NavBar />
      <section name="main-form">
        <div className="container mx-auto  p-4">
          <h1 className="text-xl font-bold text-gray-700">Programar Cita</h1>
          <SearchMainForm />
        </div>
      </section>

      <section name="doctors-cards-details">
        <div style={{ background: "url(svg/waves.svg) no-repeat  " }}>
          <div name="cards-container" className="mx-4">
            <h1 className="text-xl font-bold text-gray-700 mb-2">Resultados de Busqueda</h1>
            <DoctorCardDetails />
          </div>
        </div>
      </section>
    </Layout>
  );
}
