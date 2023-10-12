type Selections = (string | string[])[];

export const SelectionPills: React.FC<{
  selections: Selections;
  onRemove: (index: number) => void;
}> = ({ selections, onRemove }) => {
  const nonEmptySelections = selections.filter((item) => {
    if (typeof item === "string") {
      return item.length > 0;
    } else if (Array.isArray(item)) {
      return item.some(
        (subItem) => typeof subItem === "string" && subItem.length > 0
      );
    }
    return false;
  });

  if (nonEmptySelections.length === 0) {
    return null;
  }

  return (
    <div className="flex flex-wrap">
      {nonEmptySelections.map((item, index) => (
        <button
          key={index}
          onClick={() => onRemove(index)}
          className="cursor-pointer rounded-full border-2 border-black bg-[#FDFD96] my-2 mr-2 px-3 py-1.5 text-sm font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none"
        >
          {item}
          &times;
        </button>
      ))}
    </div>
  );
};
