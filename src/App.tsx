import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Workshop from "./pages/Workshop";
import AIYLoader from "./pages/AIYLoader";
import { useState } from "react";

gsap.registerPlugin(ScrollTrigger); // MAKES IT GLOBALLY ACCESSiBLE

const App = () => {
  const [showWorkshop, setShowWorkshop] = useState(false);

  return showWorkshop ? (
    <Workshop />
  ) : (
    <AIYLoader onComplete={() => setShowWorkshop(true)} />
  );
};

export default App;
