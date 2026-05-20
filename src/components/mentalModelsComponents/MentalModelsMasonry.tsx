import { mentalModelsData } from "../../utils/mentalModelsData";
import MentalModelIcon from "./MentalModelsIcon";

const MentalModelsMasonry = () => {
  const rootCause = mentalModelsData[0];
  const miss = mentalModelsData[1];
  const soupBowl = mentalModelsData[2];
  const conwaysLaw = mentalModelsData[3];
  const fiveWhys = mentalModelsData[4];
  const brokenWindow = mentalModelsData[5];
  const doubleDiamond = mentalModelsData[6];
  const humanCentered = mentalModelsData[7];
  const dry = mentalModelsData[8];
  const boilingFrog = mentalModelsData[9];

  const renderCard = (
    item: (typeof mentalModelsData)[number],
    className = "",
  ) => {
    const handleMouseMove = (event: React.MouseEvent<HTMLElement>) => {
      const card = event.currentTarget;
      const rect = card.getBoundingClientRect();

      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateY = ((x - centerX) / centerX) * 6;
      const rotateX = ((centerY - y) / centerY) * 6;

      card.style.setProperty("--mouse-x", `${x}px`);
      card.style.setProperty("--mouse-y", `${y}px`);
      card.style.setProperty("--rotate-x", `${rotateX}deg`);
      card.style.setProperty("--rotate-y", `${rotateY}deg`);
    };

    const handleMouseLeave = (event: React.MouseEvent<HTMLElement>) => {
      const card = event.currentTarget;

      card.style.setProperty("--rotate-x", "0deg");
      card.style.setProperty("--rotate-y", "0deg");
    };

    return (
      <article
        className={`mental-card ${className}`}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={
          {
            "--glow-color": item.color,
          } as React.CSSProperties
        }
      >
        <MentalModelIcon
          Icon={item.Icon}
          color={item.color}
          background={item.background}
        />

        <div className="mental-card-copy">
          <h3>{item.title}</h3>
          <p>{item.subtitle}</p>
        </div>
      </article>
    );
  };

  return (
    <div className="mental-masonry-grid">
      <div className="mental-part-one">
        <div className="mental-part-one-left">
          {renderCard(rootCause, "mental-card-tall")}
          {renderCard(conwaysLaw, "mental-card-tall")}
        </div>

        <div className="mental-part-one-right">
          <div className="mental-part-one-right-top">
            <div className="mental-part-one-right-stack">
              {renderCard(miss, "mental-card-small")}
              {renderCard(fiveWhys, "mental-card-small")}
            </div>

            {renderCard(soupBowl, "mental-card-long")}
          </div>

          {renderCard(brokenWindow, "mental-card-wide")}
        </div>
      </div>
      <div className="mental-part-two">
        <div className="mental-part-two-top">
          {renderCard(doubleDiamond, "mental-card-part-two")}
          {renderCard(humanCentered, "mental-card-part-two")}
        </div>

        <div className="mental-part-two-bottom">
          {renderCard(dry, "mental-card-part-two")}
          {renderCard(boilingFrog, "mental-card-part-two")}
        </div>
      </div>
    </div>
  );
};

export default MentalModelsMasonry;
