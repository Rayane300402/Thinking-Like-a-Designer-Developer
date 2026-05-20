import { mentalModelsData } from "../../utils/mentalModels";
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
  ) => (
    <article className={`mental-card ${className}`}>
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
