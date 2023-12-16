"use client";

import { useFormState } from "react-dom";
import grabUsername from "@/actions/grabUsername";
import RightIcon from "../icons/RightIcon";

const UsernameForm = ({ desiredUsername }) => {
  const [state] = useFormState();

  return (
    <form action={grabUsername}>
      <h1 className="text-4xl font-bold text-violet-800 text-center mb-6">
        Grab your username
      </h1>
      <p className="text-center mb-6 text-gray-500">Choose your username</p>
      <div className="max-w-xs mx-auto">
        <input
          name="username"
          className="block p-2 mx-auto border w-full mb-2 text-center"
          defaultValue={desiredUsername}
          type="text"
          placeholder="username"
        />
        <button
          className="bg-violet-800 text-white py-2 px-4 gap-2 items-center justify-center mx-auto w-full flex"
          type="submit"
        >
          <span>Claim now</span>
          <RightIcon />
        </button>
      </div>
    </form>
  );
};

export default UsernameForm;
