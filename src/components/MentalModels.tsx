import MentalModelsMasonry from "./mentalModelsComponents/MentalModelsMasonry";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

const MentalModels = () => {
  const sectionRef = useRef<HTMLElement | null>(null);

  useGSAP(
    () => {
      if (!sectionRef.current) return;

      gsap.set(".mental-header h2", {
        y: 45,
        opacity: 0,
      });

      gsap.set(".mental-card", {
        opacity: 0,
        filter: "blur(10px)",
      });

      gsap.set(".mental-card > *", {
        y: 28,
        opacity: 0,
      });

      gsap.set(".mental-quote", {
        y: 45,
        opacity: 0,
      });

      gsap
        .timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            end: "top 35%",
            scrub: 1.5,
          },
        })
        .to(".mental-header h2", {
          y: 0,
          opacity: 1,
          ease: "power3.out",
        });

      gsap
        .timeline({
          scrollTrigger: {
            trigger: ".mental-part-one",
            start: "top 80%",
            end: "center 45%",
            scrub: 1.8,
          },
        })
        .to(".mental-part-one .mental-card", {
          opacity: 1,
          filter: "blur(0px)",
          stagger: {
            each: 0.12,
            from: "start",
          },
          ease: "power3.out",
        })
        .to(
          ".mental-part-one .mental-card > *",
          {
            y: 0,
            opacity: 1,
            stagger: {
              each: 0.08,
              from: "start",
            },
            ease: "power3.out",
          },
          "-=0.5",
        );

      gsap
        .timeline({
          scrollTrigger: {
            trigger: ".mental-part-two",
            start: "top 82%",
            end: "center 50%",
            scrub: 1.8,
          },
        })
        .to(".mental-part-two .mental-card", {
          opacity: 1,
          filter: "blur(0px)",
          stagger: {
            each: 0.12,
            from: "start",
          },
          ease: "power3.out",
        })
        .to(
          ".mental-part-two .mental-card > *",
          {
            y: 0,
            opacity: 1,
            stagger: {
              each: 0.08,
              from: "start",
            },
            ease: "power3.out",
          },
          "-=0.5",
        );

      gsap.to(".mental-quote", {
        y: 0,
        opacity: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".mental-quote",
          start: "top 88%",
          end: "top 65%",
          scrub: 1.4,
        },
      });
    },
    {
      scope: sectionRef,
      revertOnUpdate: true,
    },
  );

  return (
    <section ref={sectionRef} className="mental-models">
      <div className="mental-layouts">
        <header className="mental-header header-content">
          <h2 className="header-h2">Mental Models</h2>
        </header>

        <div className="mental-masonry">
          <MentalModelsMasonry />
        </div>

        <footer className="mental-quote">
          <blockquote className="mental-quote-text">
            "Good design is actually a lot harder to notice than poor design, in
            part because
            <br /> good designs fit our needs so well that the design is
            invisible."
          </blockquote>

          <cite className="mental-quote-author">- Don Norman</cite>
        </footer>
      </div>
    </section>
  );
};

export default MentalModels;
