interface ActionButtonProps {
  onClick: () => void;
  isDisabled?: boolean;
  text?: string;
  icon: React.ReactNode;
}

const ActionButton: React.FC<ActionButtonProps> = ({
  onClick,
  isDisabled,
  text,
  icon,
}) => {
  return (
    <button
      type="button"
      disabled={isDisabled}
      onClick={onClick}
      className={`ml-2 bg-[#C4A1FF] p-2 font-bold rounded-md border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none rounded-md  transition-all${
        isDisabled
          ? "cursor-default shadow-none translate-x-[3px] translate-y-[3px] "
          : "cursor-pointer"
      }`}
    >
      {isDisabled ? text : icon}
    </button>
  );
};

export default ActionButton;
