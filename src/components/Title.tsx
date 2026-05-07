import { useRef } from "react";
import { useMediaQuery } from "react-responsive";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Title = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });

  const sectionRef = useRef<HTMLElement | null>(null);
  const textRef = useRef<HTMLDivElement | null>(null);
  const ingRef = useRef<HTMLSpanElement | null>(null);

  useGSAP(
    () => {
      if (!sectionRef.current || !textRef.current || !ingRef.current) return;

      const ingWidth = ingRef.current.scrollWidth;

      gsap.set(textRef.current, {
        autoAlpha: 0,
        y: isMobile ? 32 : 140,
        scale: isMobile ? 0.98 : 0.92,
      });

      gsap.set(ingRef.current, {
        autoAlpha: 0,
        maxWidth: 0,
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: isMobile ? "top 18%" : "top bottom",
          end: isMobile ? "top 18%" : "top top",
          scrub: isMobile ? false : 2.5,
          toggleActions: isMobile ? "play none none reverse" : undefined,
          invalidateOnRefresh: true,
        },
      });

      tl.to(textRef.current, {
        autoAlpha: 1,
        y: 0,
        scale: 1,
        duration: isMobile ? 0.9 : 1,
        ease: isMobile ? "power3.out" : "none",
      });

      tl.to(
        ingRef.current,
        {
          autoAlpha: 1,
          maxWidth: ingWidth,
          duration: 0.7,
          ease: "power3.out",
        },
        isMobile ? 0.45 : 0.82
      );
    },
    { dependencies: [isMobile], scope: sectionRef, revertOnUpdate: true }
  );

  return (
    <section ref={sectionRef} className="section-view title">
      <div ref={textRef} className="title-copy">
        {isMobile ? (
          <>
            <div className="title-line">
              <span>Think</span>
              <span ref={ingRef} className="ing">
                -ing
              </span>
              <span>&nbsp;Like a</span>
            </div>
            <div>Designer,</div>
          </>
        ) : (
          <div className="title-line">
            <span>Think</span>
            <span ref={ingRef} className="ing">
              -ing
            </span>
            <span>&nbsp;Like a Designer,</span>
          </div>
        )}

        <div className="text-secondary">Like a Developer</div>
        <div>— Even If You are Neither</div>
      </div>
    </section>
  );
};

export default Title;