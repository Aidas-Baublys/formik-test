import { Field, ErrorMessage } from "formik";

function Input({ control, label, name, type, options }) {
  return (
    <>
      <label
        htmlFor={name}
        className="text-2xl mb-1"
      >
        {label}
      </label>
      <Field
        as={control}
        id={name}
        name={name}
        type={type}
        className="rounded-md p-2 w-full bg-gray-500"
      >
        {
          options?.map(option => (
            <option key={option.value} value={option.value}>
              {option.key}
            </option>
          ))
        }
      </Field>
      <ErrorMessage
        name={name}
        component="span"
        className="text-red-800"
      />
    </>
  );
}

export default Input;
