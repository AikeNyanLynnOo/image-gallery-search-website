import { CustomInput } from "../customComponents/CustomInput";

export const InputGroup = ({
  label,
  isRequired = false,
  helperText,
  customLabelClasses,
  customHelperTextClasses,
  ...inputProps
}: any) => {
  return (
    <label className="block text-gray-700 space-y-1">
      <span
        className={`block text-sm font-medium text-primary-100 dark:text-primaryDark-100 ${customLabelClasses}`}
      >
        {isRequired && "* "} {label || "Input Label"}
      </span>
      <CustomInput {...inputProps} />
      {helperText && (
        <span className={`text-xs text-red-400 ${customHelperTextClasses}`}>
          {helperText}
        </span>
      )}
    </label>
  );
};
