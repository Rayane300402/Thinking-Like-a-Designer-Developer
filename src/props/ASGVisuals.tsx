import { asgItems } from "../utils/asgData";

type ASGVisualsProps = {
  activeIndex: number;
  onChange: (index: number) => void;
};

const ASGVisuals = ({ activeIndex, onChange }: ASGVisualsProps) => {
  const safeIndex = activeIndex % asgItems.length;
  const nextIndex = (safeIndex + 1) % asgItems.length;

  const current = asgItems[safeIndex];
  const next = asgItems[nextIndex];

  return (
    <div className="game-visuals">
      <button type="button" className="visual-pair" onClick={() => onChange(nextIndex)}>
        <div className="visual-card is-current" data-id={current.id}>
          <img src={current.src} alt={current.alt} loading="eager" decoding="async" />
        </div>

        <div className="visual-card is-next" data-id={next.id}>
          <img src={next.src} alt={next.alt} loading="eager" decoding="async"/>
        </div>
      </button>
    </div>
  );
};


export default ASGVisuals;