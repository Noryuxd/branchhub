import { useFormStatus } from "react-dom";

const SubmitButton = ({ children }) => {
  const { pending } = useFormStatus();
  return (
    <button
      disabled={pending}
      className="bg-violet-800 disabled:bg-violet-500 text-white disabled:text-gray-200 py-2 px-4 gap-2 items-center justify-center mx-auto w-full flex"
      type="submit"
    >
      {children}
    </button>
  );
};

export default SubmitButton;
