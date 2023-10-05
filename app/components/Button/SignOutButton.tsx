"use client";

import { signOut } from "next-auth/react";
import { Button } from "./Button";

export const SignOutButton = () => {
  return (
    <Button
      type="button"
      onClick={() => signOut({ callbackUrl: "/", redirect: true })}
      className="hover:drop-shadow-2xl"
    >
      Sair
    </Button>
  );
};
