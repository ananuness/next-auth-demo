import { getProviders } from "next-auth/react";
import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";
import { options } from "@/nextauth/options";
import { SignInForm } from "@/components/SignInForm/SignInForm";

export default async function SignIn() {
  const providers = await getProviders();
  const session = await getServerSession(options);

  if (session) {
    return redirect("/");
  }

  return (
    <main className="min-h-screen flex justify-center items-center p-6">
      <section className="max-w-md p-6 rounded-lg shadow-lg bg-gray-50">
        <h1 className="max-w-[224px] font-sans font-semibold mx-auto text-center text-2xl text-gray-700">
          Boas vindas ao Next Auth Demo!
        </h1>
        <SignInForm providers={providers} />
      </section>
    </main>
  );
}
