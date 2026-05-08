import { useState } from "react";
import SectionGuide from "./components/SectionGuide";
import CoreConceptVisuals from "./components/coreConceptsVisual";
import { coreConceptItems } from "../utils/coreConceptsData";

const guideItems = coreConceptItems.map((item) => ({
  id: item.id,
  label: "",
}));


const CoreConcepts = () => {
    const [activeIndex, setActiveIndex] = useState(0);
  return (
    <section className="coreConcepts">
      <div className="core-layout">
        <header className="core-header">
          <h2>The Core Concepts of Design</h2>
        </header>

        <div className="core-guide-slot">
          <SectionGuide
            items={guideItems}
            activeIndex={activeIndex}
            onChange={setActiveIndex}
            ariaLabel="Core design concepts progress"
            orientation="horizontal"
            variant="compact"
          />
        </div>

        <div className="core-visuals-slot">
          <CoreConceptVisuals
            activeIndex={activeIndex}
            onChange={setActiveIndex}
          />
        </div>
      </div>
    </section>
  );
};

export default CoreConcepts;
