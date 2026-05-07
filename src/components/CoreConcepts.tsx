import { useState } from "react";
import SectionGuide from "./components/SectionGuide";

const coreConceptGuideItems = [
  { id: "feedback", label: 1 },
  { id: "constraints", label: 2 },
  { id: "affordance", label: 3 },
  { id: "signifiers", label: 4 },
  { id: "mapping", label: 5 },
];

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
            items={coreConceptGuideItems}
            activeIndex={activeIndex}
            onChange={setActiveIndex}
            ariaLabel="Core design concepts progress"
            orientation="horizontal"
            variant="compact"
          />
        </div>

        <div className="core-visuals-slot">
          {/* carousel goes here later */}
        </div>
      </div>
    </section>
  );
};

export default CoreConcepts;
