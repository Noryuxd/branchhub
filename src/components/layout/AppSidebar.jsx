"use client";

import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartLine, faHome } from "@fortawesome/free-solid-svg-icons";
import LogoutButton from "@/components/buttons/LogoutButton";
import { usePathname } from "next/navigation";
import { faFileLines } from "@fortawesome/free-regular-svg-icons";

const AppSidebar = () => {
  const path = usePathname();
  return (
    <nav className="inline-flex flex-col text-center mt-8 gap-6 text-gray-600 ">
      <Link
        href={"/account"}
        className={
          "flex gap-4 p-1 hover:text-violet-800 " + (path === "/account" ? "text-violet-800 " : " ")
        }
      >
        <FontAwesomeIcon
          fixedWidth={true}
          icon={faFileLines}
          className={"w-6 h-6"}
        />
        <span>My page</span>
      </Link>
      <Link
        href={"/analytics"}
        className={
          "flex gap-4 p-1 hover:text-violet-800 " + (path === "/analytics" ? "text-violet-800 " : " ")
        }
      >
        <FontAwesomeIcon
          fixedWidth={true}
          icon={faChartLine}
          className={"w-6 h-6"}
        />
        <span>Analytics</span>
      </Link>
      <LogoutButton
        iconClasses={"w-6 h-6"}
        iconLeft={true}
        className={"flex hover:text-violet-800 gap-4 items-center p-1 "}
      />
      <Link
        href={"/"}
        className="flex gap-4 p-1 hover:text-violet-800 items-center text-gray-400 border-t pt-4"
      >
        <FontAwesomeIcon icon={faHome} className={"w-5 h-5 "} />
        Go back
      </Link>
    </nav>
  );
};

export default AppSidebar;
