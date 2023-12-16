"use client";

import { signIn } from "next-auth/react";
import { redirect } from "next/navigation";
import { useEffect } from "react";

const HeroForm = () => {
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
      window.localStorage.setItem("desiredUsername", username);
      await signIn("google");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="inline-flex items-center shadow-lg shadow-gray-700/20"
    >
      <span className="bg-white py-4 pl-4">branchhub.to/</span>
      <input type="text" className="py-4" placeholder="username" />
      <button type="submit" className=" bg-violet-800 text-white py-4 px-6">
        Join for Free
      </button>
    </form>
  );
};

export default HeroForm;
