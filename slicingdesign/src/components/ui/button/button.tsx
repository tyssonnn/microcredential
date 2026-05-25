import React from "react";

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children: React.ReactNode;
}

export default function Button({
  className = "bg-blue-500",
  children,
  ...props
}: IButtonProps) {
  return (
    <button
      type="button"
      className={`text-white px-3 py-1 rounded text-sm ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
