import { z } from "zod";
import { signIn } from "next-auth/react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

export const schema = z.object({
  email: z
    .string()
    .nonempty({ message: "O e-mail é obrigatório" })
    .email({ message: "E-mail inválido" })
    .trim()
    .toLowerCase(),

  password: z
    .string()
    .nonempty({ message: "A senha é obrigatória" })
    .min(8, { message: "Sua senha deve conter pelo menos 8 caracteres" }),
});

export type SignInData = z.infer<typeof schema>;

export type SignInFields = "email" | "password";

export function useSignInController() {
  const methods = useForm<SignInData>({
    resolver: zodResolver(schema),
  });

  const {
    handleSubmit: hookFormSubmit,
    formState: { errors },
  } = methods;

  const handleSubmit = hookFormSubmit(({ email, password }) => {
    signIn("credentials", {
      email,
      password,
      callbackUrl: "/",
      redirect: true,
    });
  });

  return {
    errors,
    methods,
    handleSubmit,
  };
}
