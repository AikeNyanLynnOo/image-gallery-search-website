import { CustomInput } from "../customComponents/CustomInput";

export const InputGroup = ({
  label,
  isRequired = false,
  helperText,
  customLabelClasses,
  ...inputProps
}) => {
  return (
    <label className="block text-gray-700 space-y-1">
      <span className={`text-sm font-semibold ${customLabelClasses}`}>
        {isRequired && "* "} {label || "Input Label"}
      </span>
      <CustomInput {...inputProps} />
    </label>
  );
};
