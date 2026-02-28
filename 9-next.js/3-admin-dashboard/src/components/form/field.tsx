import React, { FC } from "react";

interface Props {
  children: React.ReactNode;
  htmlFor: string;
  label: string;
}

const Field: FC<Props> = ({ children, htmlFor, label }) => {
  return (
    <div>
      <label htmlFor={htmlFor} className="block text-sm font-medium text-gray-700 mb-1">
        {label}
      </label>

      {children}
    </div>
  );
};

export default Field;
