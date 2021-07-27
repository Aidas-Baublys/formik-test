import { Formik, Form } from "formik";
import * as Yup from "yup";

import FormikControl from "../FormikControl";
import Input from './../Input/index';

function FormikContainer() {
  const initialValues = {
    email: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string().required("Required."),
  });

  const onSubmit = values => {
    console.log("Form data:", values);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {formik => (
        <Form className="form">
          <div className="flex flex-col items-start w-full">
            <FormikControl
              control="input"
              type="email"
              label="Email"
              name="email"
            />
            <FormikControl
              control="textarea"
              type="textarea"
              label="Text"
              name="text"
            />
            <Input
              control="input"
              type="email"
              label="U"
              name="u"
            />
            <Input
              control="select"
              type="select"
              label="X"
              name="x"
              options={[
                { key: "Pick something...", value: "" },
                { key: "FOO", value: "FOO" },
                { key: "BAR", value: "BAR" },
              ]}
            />
            <button
              type="submit"
              className="border-2 border-black rounded-md w-20 mt-5"
            >
              Submit
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
}

export default FormikContainer;
