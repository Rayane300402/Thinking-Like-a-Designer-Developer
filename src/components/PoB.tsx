import { useRef } from "react";
import gsap from "gsap";

const PsychologyOfBlame = () => {
  const switchRef = useRef<HTMLButtonElement | null>(null);
  const dotRef = useRef<HTMLSpanElement | null>(null);
  const isAnimating = useRef(false);

  const handleBrokenSwitch = () => {
    if (!switchRef.current || !dotRef.current || isAnimating.current) return;

    isAnimating.current = true;

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
    <section className="section-view psychology-blame">
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
              <div className="blame-control-text">Did you mean to do that?</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PsychologyOfBlame;
