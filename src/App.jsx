import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import HeroSection from "./components/Hero-Section/HeroSection";
import TashBoard from "./components/Task-Board/TashBoard";

function App() {
  return (
    <>
      <Header />
      <div className="flex flex-col justify-center items-center">
        <HeroSection />
        <TashBoard />
      </div>
      <Footer />
    </>
  );
}

export default App;
