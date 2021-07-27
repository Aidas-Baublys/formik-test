import Input from "../Input";

function FormikControl(props) {
  const { control, ...rest } = props;

  switch (control) {
    case "input":
      return <Input control={control} {...rest} />;
    case "textarea":
      return <Input control={control} {...rest} />;
    case "select":
    case "radio":
    case "checkbox":
    case "date":


      break;

    default:
      return null;
  }
}

export default FormikControl;
