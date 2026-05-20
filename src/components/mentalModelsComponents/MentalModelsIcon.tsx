// components/MentalModelIcon.tsx

import type { IconType } from "react-icons";

type MentalModelIconProps = {
  Icon: IconType;
  color: string;
  background: string;
  className?: string;
};

const MentalModelIcon = ({
  Icon,
  color,
  background,
  className = "",
}: MentalModelIconProps) => {
  return (
    <div
      className={`mental-icon ${className}`}
      style={{
        color,
        backgroundColor: background,
        borderColor: `${color}66`,
      }}
    >
      <Icon />
    </div>
  );
};

export default MentalModelIcon;