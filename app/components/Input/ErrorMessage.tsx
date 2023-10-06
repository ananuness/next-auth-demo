import { FieldErrors } from "react-hook-form";
import { ErrorMessage as HookFormErrorMessage } from "@hookform/error-message";
import { SignInFields, SignInData } from "../SignInForm/useSignInController";

export interface ErrorMessageProps {
  name: SignInFields;
  errors: FieldErrors<SignInData>;
}

export const ErrorMessage = ({ errors, name }: ErrorMessageProps) => {
  return (
    <HookFormErrorMessage
      errors={errors}
      name={name}
      render={({ message }) => (
        <p className="text-xs text-red-700">{message}</p>
      )}
    />
  );
};
