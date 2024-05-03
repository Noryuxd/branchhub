import LoginWithGoogle from "@/components/buttons/LoginWithGoogle";

const LoginPage = () => {
  return (
    <div>
      <div className=" mt-24 mb-48 p-4 max-w-xs mx-auto">
        <h1 className="text-4xl font-bold text-violet-800 text-center mb-6">
          Sign In
        </h1>
        <p className="text-center mb-6 text-gray-500">
          Sign in to your account using one of the methods below
        </p>
        <LoginWithGoogle />
      </div>
    </div>
  );
};

export default LoginPage;
