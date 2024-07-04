import "./App.css";
import CardComp from "./components/CardComp";
import DataPendidikanComp from "./components/DataPendidikanComp";
import DetailDataPendidikanComp from "./components/DetailDataPendidikanComp";
import Footer from "./components/Footer";
import HeaderComp from "./components/HeaderComp";
import { NavbarComp } from "./components/NavbarComp";
import TabComp from "./components/TabComp";
import "./css/main.css";

function App() {
  return (
    <div>
      <NavbarComp />
      <HeaderComp />
      <TabComp />
      <CardComp />
      <DataPendidikanComp />
      <DetailDataPendidikanComp />
      <Footer/>
    </div>
  );
}

export default App;
