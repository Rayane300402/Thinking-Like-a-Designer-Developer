import { coreConceptItems } from "../../utils/coreConceptsData";
import RoundIcon from "../shared/RoundIcon";

type CoreConceptVisualsProps = {
  activeIndex: number;
  onChange: (index: number) => void;
};

const CoreConceptVisuals = ({
  activeIndex,
  onChange,
}: CoreConceptVisualsProps) => {
  const total = coreConceptItems.length;



  const getOffset = (index: number) => {
    let offset = index - activeIndex;

    if (offset > total / 2) offset -= total;
    if (offset < -total / 2) offset += total;

    return offset;
  };

  const handleNext = () => {
    onChange((activeIndex + 1) % total);
  };

  return (
    <div className="core-carousel" onClick={handleNext}>
      <div className="core-carousel-stage">
        {coreConceptItems.map((item, index) => {
          const offset = getOffset(index);
          const isActive = offset === 0;
            const Icon = item.Icon;
          return (
            <button
              key={item.id}
              type="button"
              className={`core-card ${isActive ? "is-active" : ""}`}
              style={
                {
                  "--offset": offset,
                  "--abs-offset": Math.abs(offset),
                } as React.CSSProperties
              }
              onClick={(event) => {
                event.stopPropagation();
                onChange(index);
              }}
            >
              <img src={item.src} alt={item.title} />

              <div className="core-card-content">
                <RoundIcon Icon={Icon} className="core-card-icon" />
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default CoreConceptVisuals;