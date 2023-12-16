import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const LoginPage = () => {
  return (
    <div>
      <div className=" p-4 max-w-xs mx-auto">
        <h1 className="text-4xl font-bold text-center mb-6">Sign In</h1>
        <p className="text-center mb-6 text-gray-500">Sign in to your account using one of the methods below</p>
        <button className="bg-gray-950 text-white text-center w-full py-4 flex gap-2 justify-center">
          <FontAwesomeIcon icon={faGoogle} className="w-6" />
          <span>Sign In with Google</span>
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
