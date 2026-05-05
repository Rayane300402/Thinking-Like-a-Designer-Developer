import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const labels = ["PUSH?", "PULL?", "REVOLVE?", "SLIDE?", "AUTOMATIC?"];

export default function NormanDoor() {
  const [labelIndex, setLabelIndex] = useState(0);
  const sceneRef = useRef<HTMLButtonElement | null>(null);
  const doorRef = useRef<HTMLDivElement | null>(null);
  const rotation = useRef(0);
  const isAnimating = useRef(false);

  useEffect(() => {
    if (!sceneRef.current) return;

    gsap.fromTo(
      sceneRef.current,
      {
        scale: 0.72,
        opacity: 0,
        filter: "blur(10px)",
      },
      {
        scale: 1,
        opacity: 1,
        filter: "blur(0px)",
        duration: 2.2,
        ease: "power2.out",
      },
    );

    const interval = setInterval(() => {
      setLabelIndex((prev) => (prev + 1) % labels.length);
    }, 900);

    return () => clearInterval(interval);
  }, []);

  const handleClick = () => {
    if (!doorRef.current || isAnimating.current) return;

    isAnimating.current = true;
    rotation.current += 360;

    gsap.to(doorRef.current, {
      rotationY: rotation.current,
      duration: 1.15,
      ease: "power3.inOut",
      transformOrigin: "50% 50%",
      force3D: true,
      onComplete: () => {
        isAnimating.current = false;
      },
    });
  };

  return (
    <section className="section-view normanDoor">
      <button
        ref={sceneRef}
        className="door-scene"
        onClick={handleClick}
        type="button"
      >
        <div className="door-frame">
            <div ref={doorRef} className="door">
              <div className="door-face door-front">
                <div className="door-label">{labels[labelIndex]}</div>
                <div className="door-handle" />
              </div>
              <div className="door-face door-back">
                <div className="door-label">{labels[labelIndex]}</div>
              </div>
            </div>
        </div>
      </button>
    </section>
  );
}
