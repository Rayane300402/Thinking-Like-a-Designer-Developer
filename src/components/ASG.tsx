import { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useMediaQuery } from "react-responsive";
import ASGVisuals from "./components/ASGVisuals";
import { asgItems } from "../utils/asgData";
import SectionGuide from "./components/SectionGuide";

const guideItems = asgItems.map((item) => ({
  id: item.step,
  label: item.step,
}));

const ASG = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });

  useEffect(() => {
    asgItems.forEach((item) => {
      const img = new Image();
      img.src = item.src;
    });
  }, []);

  useGSAP(
    () => {
      if (!sectionRef.current) return;

      const section = sectionRef.current;
      const totalSteps = guideItems.length - 1;

      gsap.set(".game-copy h2", {
        y: 70,
        opacity: 0,
      });

      gsap.set(".game-copy p", {
        y: 35,
        opacity: 0,
      });

      gsap.set(".visual-card", {
        x: isMobile ? 0 : 120,
        y: isMobile ? 60 : 0,
        opacity: 0,
        scale: 0.92,
      });

      // entrance animation
      gsap
        .timeline({
          scrollTrigger: {
            trigger: section,
            start: "top 75%",
            end: "top 20%",
            scrub: 1,
          },
        })
        .to(".game-copy h2", {
          y: 0,
          opacity: 1,
          ease: "power3.out",
        })
        .to(
          ".game-copy p",
          {
            y: 0,
            opacity: 1,
            ease: "power3.out",
          },
          "-=0.4",
        )
        .to(
          ".visual-card",
          {
            x: 0,
            y: 0,
            opacity: 1,
            scale: 1,
            stagger: 0.14,
            ease: "power3.out",
          },
          "-=0.45",
        );

      // existing pinned scroll logic
      gsap.to(
        {},
        {
          scrollTrigger: {
            trigger: section,
            start: isMobile ? "top 20%" : "top top",

            // shorter mobile distance so the dots update while content is visible
            end: isMobile
              ? `+=${guideItems.length * 400}`
              : `+=${guideItems.length * 600}`,
            scrub: true,
            pin: true,
            anticipatePin: 1,
            onUpdate: (self) => {
              const nextIndex = gsap.utils.clamp(
                0,
                totalSteps,
                Math.round(self.progress * totalSteps),
              );

              setActiveIndex(nextIndex);
            },
          },
        },
      );
    },
    {
      scope: sectionRef,
      dependencies: [isMobile],
      revertOnUpdate: true,
    },
  );

  return (
    <section ref={sectionRef} className="section-view affordanceGame">
      <div className="game-layout">
        <SectionGuide
          items={guideItems}
          activeIndex={activeIndex}
          onChange={setActiveIndex}
          ariaLabel="Affordance examples progress"
          orientation="responsive"
          className="game-guide"
        />

        <div className="game-copy">
          <h2>
            {isMobile ? (
              <>
                The Affordance and
                <br />
                Signifiers Game
              </>
            ) : (
              <>
                The Affordance
                <br />
                and Signifiers
                <br />
                Game
              </>
            )}
          </h2>

          <p>
            I will be showing you some design and we will try to guess how to
            use them and if they are good or not
          </p>
        </div>

        <ASGVisuals activeIndex={activeIndex} onChange={setActiveIndex} />
      </div>
    </section>
  );
};
export default ASG;
