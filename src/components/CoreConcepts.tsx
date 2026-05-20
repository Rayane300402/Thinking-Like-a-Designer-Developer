import { useEffect, useRef, useState } from "react";

import { coreConceptItems } from "../utils/coreConceptsData";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import SectionGuide from "./shared/SectionGuide";
import CoreConceptVisuals from "./coreConceptsComponents/coreConceptsVisual";

const guideItems = coreConceptItems.map((item) => ({
  id: item.id,
  label: "",
}));

const CoreConcepts = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const wheelAreaRef = useRef<HTMLDivElement | null>(null);

  const [activeIndex, setActiveIndex] = useState(0);

  const wheelAmount = useRef(0);
  const isWheelLocked = useRef(false);

  const goToIndex = (direction: number) => {
    setActiveIndex((prev) => {
      const total = coreConceptItems.length;
      return (prev + direction + total) % total;
    });
  };

  useEffect(() => {
    const wheelArea = wheelAreaRef.current;
    if (!wheelArea) return;

    const handleWheel = (event: WheelEvent) => {
      event.preventDefault();

      const delta =
        Math.abs(event.deltaX) > Math.abs(event.deltaY)
          ? event.deltaX
          : event.deltaY;

      wheelAmount.current += delta;

      const threshold = window.innerWidth < 768 ? 45 : 70;

      if (isWheelLocked.current) return;

      if (Math.abs(wheelAmount.current) >= threshold) {
        const direction = wheelAmount.current > 0 ? 1 : -1;

        goToIndex(direction);

        wheelAmount.current = 0;
        isWheelLocked.current = true;

        window.setTimeout(() => {
          isWheelLocked.current = false;
        }, 320);
      }
    };

    wheelArea.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      wheelArea.removeEventListener("wheel", handleWheel);
    };
  }, []);

  useGSAP(
    () => {
      if (!sectionRef.current) return;

      const section = sectionRef.current;

      gsap.set(".core-header h2", {
        y: 45,
        opacity: 0,
      });

      gsap.set(".core-guide-slot", {
        y: 25,
        opacity: 0,
      });

      gsap.set(".core-carousel-stage", {
        y: 80,
        opacity: 0,
        filter: "blur(12px)",
      });

      gsap.set(".core-card", {
        opacity: 0,
        // filter: "brightness(0.5)",
      });

      gsap
        .timeline({
          scrollTrigger: {
            trigger: section,
            start: "top 75%",
            end: "top 20%",
            scrub: 1,
          },
        })
        .to(".core-header h2", {
          y: 0,
          opacity: 1,
          ease: "power3.out",
        })
        .to(
          ".core-guide-slot",
          {
            y: 0,
            opacity: 1,
            ease: "power3.out",
          },
          "-=0.45",
        )
        .to(
          ".core-carousel-stage",
          {
            y: 0,
            opacity: 1,
            filter: "blur(0px)",
            ease: "power3.out",
          },
          "-=0.35",
        )
        .to(
          ".core-card",
          {
            opacity: 1,
            stagger: {
              each: 0.08,
              from: "center",
            },
            ease: "power2.out",
          },
          "-=0.25",
        );

    
    },
    {
      scope: sectionRef,
      dependencies: [],
      revertOnUpdate: true,
    },
  );

  return (
    <section ref={sectionRef} className="coreConcepts">
      <div className="core-layout">
        <header className="core-header header-content">
          <h2 className="header-h2">The Core Concepts of Design</h2>
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

        <div ref={wheelAreaRef} className="core-visuals-slot">
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
