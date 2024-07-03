import React, { useState, useRef, useEffect } from 'react';

interface SelectProps {
  label: string;
  value: string;
  options: string[];
  onChange: (value: string) => void;
}

const Select: React.FC<SelectProps> = ({ label, value, options, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="mb-4 relative" ref={dropdownRef}>
      <label className="block text-gray-700 text-sm font-medium mb-2">
        {label}
      </label>
      <div
        className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        {value}
      </div>
      {isOpen && (
        <div className="absolute left-0 right-0 bg-white border border-gray-200 mt-2 rounded-lg shadow-lg z-10">
          {options.map((option, index) => (
            <div
              key={index}
              className="px-4 py-2 cursor-pointer hover:bg-gray-100"
              onClick={() => {
                onChange(option);
                setIsOpen(false);
              }}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Select;
