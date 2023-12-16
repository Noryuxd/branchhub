import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-white border-b  py-5">
      <div className="max-w-4xl flex justify-between mx-auto px-6">
        <div className="flex gap-6">
          <Link href={"/"}>BranchHub</Link>
          <nav className="flex gap-4 items-center text-slate-500 text-sm">
            <Link href={"/about"}>About</Link>
            <Link href={"/pricing"}>Pricing</Link>
            <Link href={"/contact"}>Contact</Link>
          </nav>
        </div>
        <nav className="flex gap-5 items-center text-sm text-slate-500">
          <Link href={"/login"}>Sign In</Link>
          <Link href={"/register"}>Create Account</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
