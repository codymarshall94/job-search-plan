interface SvgIconProps {
  src: string;
  alt: string;
}

const SvgIcon = ({ src, alt }: SvgIconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      aria-label={alt}
      height="24"
      viewBox="0 -960 960 960"
      width="24"
    >
      <path d={src} />
    </svg>
  );
};

export default SvgIcon;
