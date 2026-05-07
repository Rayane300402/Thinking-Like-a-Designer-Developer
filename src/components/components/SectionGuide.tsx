type SectionGuideItem = {
  id: string | number;
  label?: string | number;
};

type SectionGuideProps = {
  items: SectionGuideItem[];
  activeIndex: number;
  onChange: (index: number) => void;
  ariaLabel: string;
  orientation?: "vertical" | "horizontal" | "responsive";
  variant?: "default" | "compact";
  className?: string;
};

const SectionGuide = ({
  items,
  activeIndex,
  onChange,
  ariaLabel,
  orientation = "horizontal",
  variant = "default",
  className = "",
}: SectionGuideProps) => {
  return (
    <aside
      className={`sectionGuide sectionGuide--${orientation} sectionGuide--${variant} ${className}`}
      aria-label={ariaLabel}
    >
      <div className="sectionGuide-line" />

      {items.map((item, index) => (
        <button
          key={item.id}
          type="button"
          onClick={() => onChange(index)}
          className={`sectionGuide-dot ${activeIndex === index ? "is-active" : ""}`}
          aria-label={`Go to item ${item.label ?? index + 1}`}
       / >
      
     
      ))}
    </aside>
  );
};

export default SectionGuide;