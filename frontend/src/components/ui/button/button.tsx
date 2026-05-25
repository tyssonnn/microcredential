import React from "react";

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  variant?: "primary" | "secondary" | "outline" | "danger" | "success" | "ghost";
  children: React.ReactNode;
}

export default function Button({
  className = "",
  variant,
  children,
  ...props
}: IButtonProps) {
  // Auto-detect variant based on class names to support old code beautifully!
  let resolvedVariant = variant;
  if (!resolvedVariant) {
    if (className.includes("bg-blue-500") || className.includes("bg-indigo-600")) {
      resolvedVariant = "primary";
    } else if (className.includes("bg-red-500")) {
      resolvedVariant = "danger";
    } else if (className.includes("bg-green-600") || className.includes("bg-emerald-500")) {
      resolvedVariant = "success";
    } else if (className.includes("bg-orange-500") || className.includes("bg-amber-500")) {
      resolvedVariant = "outline";
    } else if (className.includes("bg-gray-500") || className.includes("bg-slate-500")) {
      resolvedVariant = "secondary";
    } else {
      resolvedVariant = "primary"; // fallback
    }
  }

  // Remove old background styles to prevent conflicts
  const filteredClassName = className
    .replace(/bg-\w+-\d+/g, "")
    .replace(/text-\w+/g, "")
    .replace(/rounded(-\w+)?/g, "")
    .replace(/px-\d+/g, "")
    .replace(/py-\d+/g, "")
    .trim();

  const variantStyles = {
    primary: "bg-gradient-to-r from-indigo-600 to-violet-600 text-white hover:from-indigo-500 hover:to-violet-500 shadow-md shadow-indigo-500/10 hover:shadow-lg hover:shadow-indigo-500/20 hover:-translate-y-[1px]",
    secondary: "bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-800 border border-slate-200/50 hover:shadow-sm",
    outline: "bg-white border border-indigo-200 text-indigo-600 hover:bg-indigo-50/50 hover:border-indigo-300 hover:shadow-sm",
    danger: "bg-gradient-to-r from-rose-500 to-red-500 text-white hover:from-rose-600 hover:to-red-600 shadow-md shadow-red-500/10 hover:shadow-lg hover:shadow-red-500/20 hover:-translate-y-[1px]",
    success: "bg-gradient-to-r from-emerald-500 to-teal-500 text-white hover:from-emerald-600 hover:to-teal-600 shadow-md shadow-emerald-500/10 hover:shadow-lg hover:shadow-emerald-500/20 hover:-translate-y-[1px]",
    ghost: "bg-transparent text-slate-600 hover:bg-slate-100/70 hover:text-slate-800 shadow-none border-none",
  };

  return (
    <button
      type={props.type || "button"}
      className={`inline-flex items-center justify-center font-semibold tracking-wide px-4 py-2.5 rounded-xl text-sm transition-all duration-300 active:scale-95 disabled:opacity-50 disabled:pointer-events-none cursor-pointer ${variantStyles[resolvedVariant]} ${filteredClassName}`}
      {...props}
    >
      {children}
    </button>
  );
}
