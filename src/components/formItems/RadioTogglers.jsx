import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const RadioTogglers = ({ options, defaultValue }) => {
  return (
    <div className="radio-togglers shadow">
      {options.map((option) => (
        <label>
          <input
            type="radio"
            name="bgType"
            value={option.value}
            defaultChecked={defaultValue === option.value}
          />
          <div>
            <FontAwesomeIcon className={"h-6 w-6"} icon={option.icon} />
            <span>{option.label}</span>
          </div>
        </label>
      ))}
    </div>
  );
};

export default RadioTogglers;
