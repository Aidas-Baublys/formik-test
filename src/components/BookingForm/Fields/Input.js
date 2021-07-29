import { TextField } from "@material-ui/core";
import { useField } from "formik";

function Input({
  name,
  ...rest
}) {
  const [field, meta] = useField(name);

  const config = {
    ...field,
    ...rest,
  };

  if (meta && meta.touched && meta.error) {
    config.error = true;
    config.helperText = meta.error;
  }

  return (
    <TextField {...config} />
  );
}

export default Input;
