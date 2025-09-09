"use client";

import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { signIn } from "next-auth/react";

const LoginWithGoogle = () => {
  return (
    <button
      onClick={() => signIn("google", { callbackUrl: "/" })}
      className="bg-violet-800 text-white text-center w-full py-4 flex gap-3 items-center justify-center"
    >
      <FontAwesomeIcon icon={faGoogle} className="h-6" />
      <span>Sign In with Google</span>
    </button>
  );
};

export default LoginWithGoogle;
