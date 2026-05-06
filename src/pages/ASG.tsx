import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const steps = ["01", "02", "03", "04", "05"];

const ASG = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useGSAP(() => {
    if (!sectionRef.current) return;

    const totalSteps = steps.length - 1;

    gsap.to({}, {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: `+=${steps.length * 600}`,
        scrub: true,
        pin: true,
        onUpdate: (self) => {
          const nextIndex = Math.round(self.progress * totalSteps);
          setActiveIndex(nextIndex);
        },
      },
    });
  }, []);

  const handleDotClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <section ref={sectionRef} className="affordanceGame">
      <div className="game-layout">
        <aside className="game-guide" aria-label="Affordance examples progress">
          <div className="guide-line" />

          {steps.map((step, index) => (
            <button
              key={step}
              type="button"
              onClick={() => handleDotClick(index)}
              className={`guide-dot ${activeIndex === index ? "is-active" : ""}`}
              aria-label={`Go to example ${step}`}
            >
              
            </button>
          ))}
        </aside>

        <div className="game-copy" />
        <div className="game-visuals" />
      </div>
    </section>
  );
}
export default ASG;
