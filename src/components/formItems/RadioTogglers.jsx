import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const RadioTogglers = ({ options, defaultValue, onChange }) => {
  return (
    <div className="radio-togglers shadow">
      {options.map((option) => (
        <label key={option.value}>
          <input
            type="radio"
            name="bgType"
            onClick={(e) => onChange(e.target.value)}
            value={option.value}
            defaultChecked={defaultValue === option.value}
          />
          <div>
            <FontAwesomeIcon className={"h-5 w-5"} icon={option.icon} />
            <span>{option.label}</span>
          </div>
        </label>
      ))}
    </div>
  );
};

export default RadioTogglers;
