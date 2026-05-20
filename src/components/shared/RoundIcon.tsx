// components/RoundIcon.tsx

import type { IconType } from "react-icons";

type RoundIconProps = {
  Icon: IconType;
  className?: string;
};

const RoundIcon = ({ Icon, className = "" }: RoundIconProps) => {
  return (
    <div className={`round-icon ${className}`}>
      <Icon />
    </div>
  );
};

export default RoundIcon;