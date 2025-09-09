"use client";

import grabUsername from "@/actions/grabUsername";
import RightIcon from "../icons/RightIcon";
import { useState } from "react";
import SubmitButton from "../buttons/SubmitButton";

const UsernameForm = ({ desiredUsername }) => {
  const [taken, setTaken] = useState(false);
  async function handleSubmit(formData) {
    const result = await grabUsername(formData);
    setTaken(result === false);
  }

  return (
    <form action={handleSubmit}>
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
        {taken && (
          <div className=" text-red-500 text-center -2 mb-2">
            This username is already taken
          </div>
        )}
        <SubmitButton>
          <span>Claim now</span>
          <RightIcon />
        </SubmitButton>
      </div>
    </form>
  );
};

export default UsernameForm;
