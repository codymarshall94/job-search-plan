type Selections = (string | string[])[];

const SelectionInput: React.FC<{
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  onAdd: (value: string) => void;
  suggestions: string[];
  handleKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}> = ({
  placeholder,
  value,
  onChange,
  onAdd,
  suggestions,
  handleKeyDown,
}) => (
  <div className="flex flex-wrap">
    <input
      type="text"
      id={placeholder}
      name={placeholder}
      value={value}
      autoComplete="off"
      onChange={(e) => onChange(e.target.value)}
      onKeyDown={handleKeyDown}
      className="w-full p-2 border-4 border-black focus:outline-none"
    />
    {value.length > 0 && suggestions.length > 0 && (
      <div className="flex">
        {suggestions.map((item) => (
          <div
            key={item}
            className="bg-[#87CEEB] p-1 border-4 border-black mr-2 mb-2 mt-2"
          >
            {item}
            <button
              className="ml-2 text-lg focus:outline-none"
              onClick={() => onAdd(item)}
            >
              +
            </button>
          </div>
        ))}
      </div>
    )}
  </div>
);