import React, { useRef, useState } from 'react';
import { SelectionPills } from './components/SelectionPills/SelectionPills';

export const InputWithSelection: React.FC<{
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  suggestions: string[];
  selections: Selections;
  onAdd: (value: string) => void;
  onRemove: (index: number) => void;
}> = ({
  placeholder,
  value,
  onChange,
  suggestions,
  selections,
  onAdd,
  onRemove,
}) => {
  const [isInputFocused, setInputFocused] = useState(false);
  const inputRef = useRef(null);

  const filteredSuggestions = suggestions
    .filter((item) => item.toLowerCase().includes(value.toLowerCase()))
    .slice(0, 5);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && value.trim() !== "") {
      onAdd(value);
      onChange("");
      e.preventDefault();
    }
  };

  const handleSuggestionMouseDown = (e: React.MouseEvent, suggestion: string) => {
    e.preventDefault(); // Prevents the input from losing focus
    onAdd(suggestion);
    onChange("");
  };

  return (
    <div className="mb-4">
      <label className="font-bold" htmlFor={placeholder}>
        {placeholder}:
      </label>
      {selections.length > 0 && (
        <SelectionPills selections={selections} onRemove={onRemove} />
      )}
      <div className="flex flex-wrap">
        <input
          type="text"
          id={placeholder}
          name={placeholder}
          value={value}
          autoComplete="off"
          onChange={(e) => onChange(e.target.value)}
          onKeyDown={handleKeyDown}
          onFocus={() => setInputFocused(true)}
          onBlur={() => setInputFocused(false)}
          className="w-full rounded-md border-2 border-black p-[10px] font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] outline-none transition-all focus:translate-x-[3px] focus:translate-y-[3px] focus:shadow-none"
        />
        {isInputFocused && value.length > 0 && filteredSuggestions.length > 0 && (
          <div className="suggestions-container">
            {filteredSuggestions.map((item) => (
              <button
                key={item}
                onMouseDown={(e) => handleSuggestionMouseDown(e, item)}
                className="cursor-pointer rounded-full border-2 border-black bg-[#bc95d4] mt-2 mr-2 px-3 py-1.5 text-sm font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none"
              >
                {item}+
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
