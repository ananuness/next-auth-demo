import { HTMLProps, MouseEventHandler, forwardRef } from "react";
import { cn } from "app/shared/utils/tw-merge";

interface ButtonProps {
  id?: string;
  icon?: React.JSX.Element;
  type?: "button" | "submit";
  className?: HTMLProps<HTMLElement>["className"];
  onClick?: MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
  children?: React.ReactNode;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  function Button(
    { onClick, type = "button", className, id, disabled, children },
    ref
  ) {
    return (
      <button
        id={id}
        ref={ref}
        type={type}
        onClick={onClick}
        disabled={disabled}
        className={cn(
          "w-full flex justify-center items-center gap-x-4 px-4 py-3 rounded-md duration-500 font-medium text-white bg-teal-700 hover:bg-teal-800 focus:outline focus:outline-2 focus:outline-teal-950",
          className
        )}
      >
        {children}
      </button>
    );
  }
);
