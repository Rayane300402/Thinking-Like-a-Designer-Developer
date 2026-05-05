import { useEffect, useState } from "react";

type AIYLoaderProps = {
  onComplete: () => void;
};


export default function AIYLoader({ onComplete }: AIYLoaderProps) {
  const [done, setDone] = useState(false);

  useEffect(() => {
    const finishTimer = setTimeout(() => {
      setDone(true);
    }, 3500);

    const completeTimer = setTimeout(() => {
      onComplete();
    }, 4700);

    return () => {
      clearTimeout(finishTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  return (
    <main className="loader-page">
        <div className={`loader ${done ? "is-done" : ""}`} aria-label="Loading AIY">
          <div className="aiy-row">
            <svg height="0" width="0" viewBox="0 0 64 64" className="absolute">
              <defs xmlns="http://www.w3.org/2000/svg">
                <linearGradient
                  id="aGradient"
                  gradientUnits="userSpaceOnUse"
                  x1="0"
                  y1="62"
                  x2="0"
                  y2="2"
                >
                  <stop stopColor="#FF6900" />
                  <stop offset="1" stopColor="#FFB36B" />
                </linearGradient>
                <linearGradient
                  id="iGradient"
                  gradientUnits="userSpaceOnUse"
                  x1="0"
                  y1="64"
                  x2="0"
                  y2="0"
                >
                  <stop stopColor="#FF8A1F" />
                  <stop offset="1" stopColor="#FFD0A3" />
                  <animateTransform
                    attributeName="gradientTransform"
                    type="rotate"
                    dur="8s"
                    repeatCount="indefinite"
                    values="0 32 32;-270 32 32;-270 32 32;-540 32 32;-540 32 32;-810 32 32;-810 32 32;-1080 32 32;-1080 32 32"
                    keyTimes="0; 0.125; 0.25; 0.375; 0.5; 0.625; 0.75; 0.875; 1"
                    keySplines=".42,0,.58,1;.42,0,.58,1;.42,0,.58,1;.42,0,.58,1;.42,0,.58,1;.42,0,.58,1;.42,0,.58,1;.42,0,.58,1"
                  />
                </linearGradient>
                <linearGradient
                  id="yGradient"
                  gradientUnits="userSpaceOnUse"
                  x1="0"
                  y1="62"
                  x2="0"
                  y2="2"
                >
                  <stop stopColor="#C94F00" />
                  <stop offset="1" stopColor="#FF6900" />
                </linearGradient>
              </defs>
            </svg>
            {/* A */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 64 64"
              height="64"
              width="64"
              className="inline-block"
            >
              <path
                className="dash"
                stroke="url(#aGradient)"
                strokeWidth="8"
                strokeLinecap="round"
                strokeLinejoin="round"
                pathLength="360"
                d="M 8 60 L 32 4 L 56 60 M 18 38 H 46"
              />
            </svg>
            {/* I */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 64 64"
              height="64"
              width="64"
              className="inline-block"
            >
              <path
                className="dash"
                stroke="url(#iGradient)"
                strokeWidth="8"
                strokeLinecap="round"
                strokeLinejoin="round"
                pathLength="360"
                d="M 18 6 H 46 M 32 6 V 58 M 18 58 H 46"
              />
            </svg>
            {/* Y */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 64 64"
              height="64"
              width="64"
              className="inline-block"
            >
              <path
                className="dash"
                stroke="url(#yGradient)"
                strokeWidth="8"
                strokeLinecap="round"
                strokeLinejoin="round"
                pathLength="360"
                d="M 8 6 L 32 32 L 56 6 M 32 32 V 58"
              />
            </svg>
          </div>
          <div className={`expert-text ${done ? "show" : ""}`}>
            Expert Solutions
          </div>
        </div>
    </main>
  );
}
