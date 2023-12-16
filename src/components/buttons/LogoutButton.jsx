"use client";

import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { signOut } from "next-auth/react";

const LogoutButton = () => {
  return (
    <button className="flex gap-2 items-center px-2" onClick={() => signOut()}>
      <span>Logout</span>
      <FontAwesomeIcon icon={faRightFromBracket} />
    </button>
  );
};

export default LogoutButton;
