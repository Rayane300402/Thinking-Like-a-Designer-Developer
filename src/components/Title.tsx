import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Title = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const textRef = useRef<HTMLDivElement | null>(null);
  const ingRef = useRef<HTMLSpanElement | null>(null);

  useGSAP(() => {
    if (!sectionRef.current || !textRef.current || !ingRef.current) return;

    const ingWidth = ingRef.current.scrollWidth;

    gsap.set(textRef.current, {
      autoAlpha: 0,
      y: 140,
      scale: 0.92,
    });

    gsap.set(ingRef.current, {
      autoAlpha: 0,
      maxWidth: 0,
    });

    gsap.to(textRef.current, {
      autoAlpha: 1,
      y: 0,
      scale: 1,
      ease: "none",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top bottom",
        end: "top top",
        scrub: 2.5,
      },
    });

    gsap.to(ingRef.current, {
      autoAlpha: 1,
      maxWidth: ingWidth,
      duration: 0.8,
      ease: "power3.out",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        toggleActions: "play none none reverse",
      },
    });
  }, []);

  return (
    // make section view not work in smaller screens 
    <section ref={sectionRef} className="section-view title"> 
      <div ref={textRef} className="title-copy">
        <div className="title-line">
          <span>Think</span>
          <span ref={ingRef} className="ing">
            -ing
          </span>
          <span>&nbsp;Like a</span>
        </div>

        <div>Designer,</div>
        <div className="text-secondary">Like a Developer</div>
        <div>— Even If You</div>
        <div>are Neither</div>
      </div>
    </section>
  );
};

export default Title;