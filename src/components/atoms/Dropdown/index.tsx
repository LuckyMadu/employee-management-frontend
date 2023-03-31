"use client";

import { DropdownProps } from "@/src/types";

export const Dropdown: React.FC<DropdownProps> = ({
  name,
  label,
  register,
  options,
}) => {
  return (
    <>
      {label && (
        <label className="dropdown-label " htmlFor={name}>
          {label}
        </label>
      )}
      <div className="relative">
        <select className="dropdown-select" id={name} {...register(name)}>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <div className="dropdown-down-arrow">
          <svg
            className="fill-current h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
          </svg>
        </div>
      </div>
    </>
  );
};
