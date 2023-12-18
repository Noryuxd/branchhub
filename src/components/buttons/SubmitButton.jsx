import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useFormStatus } from "react-dom";

const SubmitButton = ({ children, className = "" }) => {
  const { pending } = useFormStatus();
  return (
    <button
      disabled={pending}
      className={
        "bg-violet-800 disabled:bg-violet-500 text-white disabled:text-gray-200 py-2 px-4 gap-2 items-center justify-center mx-auto w-full flex" +
        className
      }
      type="submit"
    >
      {pending && (
        <FontAwesomeIcon
          icon={faCircleNotch}
          className="text-white w-6 h-6"
          spin
        />
      )}
      {!pending && children}
    </button>
  );
};

export default SubmitButton;
