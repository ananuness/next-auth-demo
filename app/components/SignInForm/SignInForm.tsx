"use client";

import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { BuiltInProviderType } from "next-auth/providers/index";
import { ClientSafeProvider, LiteralUnion, signIn } from "next-auth/react";
import { FormProvider } from "react-hook-form";
import googleLogo from "@/assets/google.svg";
import githubLogo from "@/assets/github.svg";
import { Input } from "@/components/Input/Input";
import { Button } from "@/components/Button/Button";
import { useSignInController } from "./useSignInController";

interface SignInFormProps {
  providers: Record<
    LiteralUnion<BuiltInProviderType, string>,
    ClientSafeProvider
  > | null;
}

export const SignInForm = ({ providers }: SignInFormProps) => {
  const searchParams = useSearchParams();
  const error = searchParams.get("error");
  const { errors, methods, handleSubmit } = useSignInController();

  return (
    <>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit} className="flex flex-col gap-2 mt-4">
          <Input
            label="E-mail"
            name="email"
            placeholder="E-mail"
            errors={errors}
          />
          <Input
            type="password"
            label="Senha"
            name="password"
            placeholder="Senha"
            errors={errors}
          />
          <Button type="submit" className="mt-4">
            Entrar
          </Button>
        </form>
      </FormProvider>

      {error && (
        <h3 className="rounded-md py-1 my-2 font-semibold text-center text-red-700">
          Credenciais inválidas
        </h3>
      )}

      <p className="w-full relative my-4 text-center text-gray-400">
        <span className="relative z-10 px-1 bg-gray-50">
          ou utilize sua conta
        </span>
        <span
          role="presentation"
          className="w-full h-[1px] absolute top-1/2 left-0 bg-gray-300"
        ></span>
      </p>

      <div className="flex items-center gap-2 max-xs:flex-col max-xs:items-stretch">
        {providers &&
          Object.values(providers).map(
            (provider) =>
              provider.type !== "credentials" && (
                <div key={provider.name} className="flex-grow-[1]">
                  <Button
                    onClick={() => signIn(provider.id, { callbackUrl: "/" })}
                  >
                    {provider.id === "google" && (
                      <Image src={googleLogo} alt="google" className="w-6" />
                    )}
                    {provider.id === "github" && (
                      <Image src={githubLogo} alt="github" className="w-6" />
                    )}
                    {provider.name}
                  </Button>
                </div>
              )
          )}
      </div>
    </>
  );
};
