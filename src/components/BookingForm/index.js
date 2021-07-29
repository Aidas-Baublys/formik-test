import { Container, Grid, Typography } from "@material-ui/core";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import Input from './Fields/Input';

const initialValues = {
  name: "",
  surname: "",
  email: "",
  phone: "",
  address: "",
  city: "",
  province: "",
  country: "",
};

const validationSchema = Yup.object({
  name: Yup.string()
    .required("Required."),
  surname: Yup.string()
    .required("Required."),
  email: Yup.string()
    .email("Invalid email format.")
    .required("Required."),
  phone: Yup.string()
    .required("Required."),
  address: Yup.string()
    .required("Required."),
  city: Yup.string()
    .required("Required."),
  province: Yup.string()
    .required("Required."),
  country: Yup.string()
    .required("Required."),
});

const onSubmit = (values, formik) => {
  console.log("Submitted values:", values);
};

function BookingForm() {
  return (
    <Container>
      <Typography>
        SUPER FORM
      </Typography>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography>
                Your details
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Input
                name="name"
                label="Name"
              />
            </Grid>
            <Grid item xs={6}>
              <Input
                name="surname"
                label="Surname"
              />
            </Grid>
            <Grid item xs={6}>
              <Input
                name="email"
                label="Email"
              />
            </Grid>
            <Grid item xs={6}>
              <Input
                name="phone"
                label="Phone"
              />
            </Grid>
            <Grid item xs={12}>
              <Typography>
                Address
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Input
                name="address"
                label="Address"
              />
            </Grid>
            <Grid item xs={4}>
              <Input
                name="city"
                label="City"
              />
            </Grid>
            <Grid item xs={4}>
              <Input
                name="province"
                label="Province"
              />
            </Grid>
            <Grid item xs={4}>
              <Input
                name="country"
                label="Country"
              />
            </Grid>
            <Grid item xs={12}>
              <Typography>
                Booking info
              </Typography>
            </Grid>
          </Grid>
        </Form>
      </Formik>
    </Container>
  );
}

export default BookingForm;
