import { HTMLProps } from "react";
import { useFormContext } from "react-hook-form";
import { cn } from "@/utils/tw-merge";
import { ErrorMessage, ErrorMessageProps } from "./ErrorMessage";

interface InputProps extends ErrorMessageProps {
  label: string;
  placeholder: string;
  type?: "text" | "password";
  className?: HTMLProps<HTMLElement>["className"];
}

export const Input = ({
  label,
  type = "text",
  name,
  errors,
  placeholder,
  className,
}: InputProps) => {
  const { register } = useFormContext();

  return (
    <div>
      <div>
        <label htmlFor={name} className="mb-1 text-gray-600">
          {label}
        </label>
        <input
          type={type}
          placeholder={placeholder}
          {...register(name)}
          className={cn(
            "w-full p-4 mb-1 rounded-lg border border-gray-300 text-gray-600 bg-gray-50 focus:border-teal-700 focus:outline-none",
            Object.prototype.hasOwnProperty.call(errors, name) &&
              "border-red-500",
            className
          )}
        />
      </div>

      <ErrorMessage name={name} errors={errors} />
    </div>
  );
};
