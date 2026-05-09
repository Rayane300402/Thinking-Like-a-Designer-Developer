import { useRef, useState } from "react";
import gsap from "gsap";
import clsx from "clsx";
import { useGSAP } from "@gsap/react";

const PsychologyOfBlame = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const switchRef = useRef<HTMLButtonElement | null>(null);
  const dotRef = useRef<HTMLSpanElement | null>(null);
  const isAnimating = useRef(false);

  const [showBlameText, setShowBlameText] = useState(false);

  useGSAP(
    () => {
      if (!sectionRef.current) return;

      // Initial states
      gsap.set(".blame-header h2", {
        y: 40,
        opacity: 0,
      });

      gsap.set(".blame-accent-line", {
        scaleY: 0,
        transformOrigin: "center center",
      });

      gsap.set(".main-title h3", {
        x: -80,
        opacity: 0,
      });

      gsap.set(".main-title span", {
        scale: 0.7,
        opacity: 0,
        transformOrigin: "center center",
      });

      gsap.set(".blame-subtitle", {
        y: 20,
        opacity: 0,
      });

      gsap.set(".blame-question-mark", {
        scale: 0.8,
        opacity: 0,
      });

      gsap.set(".blame-control", {
        x: 60,
        opacity: 0,
      });

      // Scroll-triggered entrance
      gsap
        .timeline({
          defaults: {
            duration: 1.4,
            ease: "power3.out",
          },
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
            end: "center center",
            scrub: 2.2,
          },
        })
        // Header
        .to(".blame-header h2", {
          y: 0,
          opacity: 1,
        })

        // Accent line drawing
        .to(
          ".blame-accent-line",
          {
            scaleY: 1,
            duration: 1.8,
          },
          "-=0.7",
        )

        // Main title slides in
        .to(
          ".main-title h3",
          {
            x: 0,
            opacity: 1,
            duration: 1.8,
          },
          "-=1.0",
        )

        // Orange "A"
        .to(
          ".main-title span",
          {
            scale: 1,
            opacity: 1,
            duration: 1.2,
            ease: "back.out(1.8)",
          },
          "-=0.8",
        )

        // Subtitle
        .to(
          ".blame-subtitle",
          {
            y: 0,
            opacity: 1,
            duration: 1.3,
          },
          "-=0.9",
        )

        // Question mark
        .to(
          ".blame-question-mark",
          {
            scale: 1,
            opacity: 0.28,
            duration: 1.8,
          },
          "-=1.1",
        )

        // Switch
        .to(
          ".blame-control",
          {
            x: 0,
            opacity: 1,
            duration: 1.6,
            ease: "back.out(1.4)",
          },
          "-=1.0",
        )

        .to(
          switchRef.current,
          {
            x: 6,
            duration: 0.25,
            ease: "power1.inOut",
            yoyo: true,
            repeat: 1,
          },
          "-=0.2",
        );
    },
    {
      scope: sectionRef,
      revertOnUpdate: true,
    },
  );

  const handleBrokenSwitch = () => {
    if (!switchRef.current || !dotRef.current || isAnimating.current) return;

    isAnimating.current = true;
    setShowBlameText(false);

    const isMobile = window.innerWidth < 768;
    const onX = isMobile ? 62 : 87;
    const throwLeftX = isMobile ? -70 : -105;

    gsap
      .timeline({
        defaults: { ease: "power3.out" },
        onComplete: () => {
          isAnimating.current = false;
        },
      })
      // turn on
      .to(switchRef.current, {
        backgroundColor: "#ff6900",
        duration: 0.25,
      })
      .to(
        dotRef.current,
        {
          x: onX,
          duration: 0.45,
          ease: "back.out(1.7)",
        },
        "<",
      )

      // wait like it "accepted" it
      .to({}, { duration: 1.1 })

      // reject / throw outside
      .to(dotRef.current, {
        x: throwLeftX,
        y: isMobile ? -10 : -14,
        rotate: -35,
        scale: 0.92,
        duration: 0.34,
        ease: "power4.in",
      })
      .to(
        switchRef.current,
        {
          backgroundColor: "#27272a",
          duration: 0.22,
        },
        "-=0.18",
      )
      .call(() => {
        setShowBlameText(true);
      })

      // bounce back home
      .to(dotRef.current, {
        x: 0,
        y: 0,
        rotate: 0,
        scale: 1,
        duration: 0.55,
        ease: "elastic.out(1, 0.45)",
      });
  };

  return (
    <section ref={sectionRef} className="section-view psychology-blame">
      <div className="blame-layout">
        <header className="blame-header header-content">
          <h2 className="header-h2">The Psychology of Blame</h2>
        </header>

        <div className="blame-content">
          <div className="blame-left">
            <div className="blame-accent-line" />

            <div className="blame-copy">
              <div className="main-title">
                <h3>
                  DON'T
                  <br />
                  SOLVE <span>A</span>
                  <br />
                  PROBLEM
                </h3>
              </div>

              <div className="blame-subtitle">
                <p>
                  Solve the <span>right</span> problem
                </p>
              </div>
            </div>
          </div>

          <div className="blame-right">
            <div className="blame-question-mark">?</div>

            <div className="blame-control">
              <button
                ref={switchRef}
                type="button"
                className="blame-switch"
                onClick={handleBrokenSwitch}
              >
                <span ref={dotRef} className="blame-switch-dot" />
              </button>
              <div
                className={clsx(
                  "blame-control-text transition-all duration-300",
                  showBlameText
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-2 pointer-events-none",
                )}
              >
                Did you mean to do that?
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PsychologyOfBlame;
