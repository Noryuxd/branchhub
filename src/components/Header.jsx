import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import Link from "next/link";
import LogoutButton from "./buttons/LogoutButton";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = async () => {
  const session = await getServerSession(authOptions);
  return (
    <header className="bg-white border-b  py-5">
      <div className="max-w-4xl flex justify-between mx-auto px-6">
        <div className="flex gap-6">
          <Link
            href={"/"}
            className="flex items-center font-bold text-violet-800 gap-2"
          >
            <FontAwesomeIcon icon={faLink} />
            <span>BranchHub</span>
          </Link>
          <nav className="flex gap-4 items-center text-slate-500 text-sm">
            <Link href={"/about"}>About</Link>
            <Link href={"/pricing"}>Pricing</Link>
            <Link href={"/contact"}>Contact</Link>
          </nav>
        </div>
        <nav className="flex gap-5 items-center text-sm text-slate-500">
          {!!session && (
            <>
              <Link href={"/account"}>Hello, {session?.user?.name}</Link>
              <LogoutButton />
            </>
          )}
          {!session && (
            <>
              <Link href={"/login"}>Sign In</Link>
              <Link href={"/login"}>Create Account</Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
