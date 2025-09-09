"use client";

import { signIn } from "next-auth/react";
import { redirect, useRouter } from "next/navigation";
import { useEffect } from "react";

const HeroForm = ({ user }) => {
  const router = useRouter();
  useEffect(() => {
    if (
      "localStorage" in window &&
      window.localStorage.getItem("desiredUsername")
    ) {
      const username = window.localStorage.getItem("desiredUsername");
      window.localStorage.removeItem("desiredUsername");
      redirect(`/account?desiredUsername=${username}`);
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const input = form.querySelector("input");
    const username = input.value;
    if (username.length > 0) {
      if (user) {
        router.push("/account?desiredUsername=" + username);
      } else {
        window.localStorage.setItem("desiredUsername", username);
        await signIn("google");
      }
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="inline-flex bg-white items-center shadow-lg shadow-gray-700/20"
    >
      <span className="bg-white py-4 pl-4">branchhub.to/</span>
      <input
        type="text"
        className=""
        style={{
          backgroundColor: "white",
          marginBottom: 0,
          paddingLeft: 0,
          paddingTop: 14,
          paddingBottom: 14,
        }}
        placeholder="username"
      />
      <button
        type="submit"
        className=" bg-violet-800 text-white py-4 px-6 whitespace-nowrap hover:bg-white hover:text-violet-800 border-2 border-white hover:border-violet-800"
      >
        Join for Free
      </button>
    </form>
  );
};

export default HeroForm;
