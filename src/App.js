import "./App.css";
import CardComp from "./components/CardComp";
import DataBanjirComp from "./components/DataBanjirComp";
import InfoSection from "./components/InfoSection";
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
      <DataBanjirComp />
      <InfoSection />
      <Footer/>
    </div>
  );
}

export default App;
