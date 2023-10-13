interface SvgIconProps {
  src: string;
  alt: string;
  className?: string;
  style?: React.CSSProperties;
}

const SvgIcon = ({ src, alt, className, style }: SvgIconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      aria-label={alt}
      height="24"
      viewBox="0 -960 960 960"
      width="24"
      className={className}
      style={style}
    >
      <path d={src} />
    </svg>
  );
};

export default SvgIcon;
