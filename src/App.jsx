import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Hero from "./sections/Hero";
import NavBar from "./sections/NavBar";
import FirstVideo from "./sections/FirstVideo";
import Jason from "./sections/Jason";
import SecondVideo from "./sections/SecondVideo";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  return (
    <main>
      <div>
        <NavBar />
        <Hero />
        <FirstVideo />
        <Jason />
        <SecondVideo />
      </div>
    </main>
  );
};

export default App;
