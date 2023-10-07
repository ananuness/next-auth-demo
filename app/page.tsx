import Image from "next/image";
import { redirect } from "next/navigation";
import { getServerSession } from "next-auth/next";
import { options } from "@/nextauth/options";
import { SignOutButton } from "@/components/Button/SignOutButton";

export default async function Home() {
  const session = await getServerSession(options);

  if (!session) {
    redirect("/api/auth/signin?callbackUrl=/server");
  }

  const user = session?.user;

  return (
    <main className="min-h-screen flex justify-center items-center p-6">
      <div className="w-full max-w-fit flex flex-col gap-4 p-8 rounded-lg shadow-large bg-gray-50">
        <figure className="flex items-center gap-x-4 max-sm:flex-col">
          <Image
            src={user?.image as string}
            alt="imagem do usuário"
            width={80}
            height={80}
            className="border-2 rounded-full"
          />
          <figcaption className="max-sm:text-center">
            <h4 className="text-2xl font-bold text-gray-700 max-xs:text-xl">
              {user?.name}
            </h4>
            <h5 className="text-xl font-medium text-gray-500 max-xs:text-base">
              {user?.email}
            </h5>
          </figcaption>
        </figure>

        <SignOutButton />
      </div>
    </main>
  );
}
