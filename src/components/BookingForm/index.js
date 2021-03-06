import { Container, Grid, Typography, TextField, Button } from "@material-ui/core";
import { Form, Formik } from "formik";
import * as Yup from "yup";

import Input from './Fields/UniversalInput';
import CheckboxInput from "./Fields/CheckboxInput";

const initialValues = {
  name: "",
  surname: "",
  email: "",
  phone: "",
  address: "",
  city: "",
  province: "",
  country: "",
  date: "",
  message: "",
  termsOfService: false,
};

const validationSchema = Yup.object({
  name: Yup.string()
    .required("Required."),
  surname: Yup.string()
    .required("Required."),
  email: Yup.string()
    .email("Invalid email.")
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
  date: Yup.date("Invalid date.")
    .required("Required."),
  message: Yup.string(),
  termsOfService: Yup.boolean()
    .oneOf([true], "Please accept.")
    .required("Required."),
});

const onSubmit = (values) => {
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
                select
                options={
                  {
                    "LT": "Lietuva",
                    "LV": "Latvija",
                    "EE": "Estija",
                  }
                }
              />
            </Grid>
            <Grid item xs={12}>
              <Typography>
                Booking info
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Input
                name="date"
                label="Date"
                type="date"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="message"
                label="Message"
                fullWidth
                multiline
                minRows={5}
              />
            </Grid>
            <Grid item xs={12}>
              <CheckboxInput
                name="termsOfService"
                legend="Terms of Service"
                label="I agree"
              />
            </Grid>
            <Button
              type="submit"
              variant="contained"
              color="primary"
            >
              Submit
            </Button>
          </Grid>
        </Form>
      </Formik>
    </Container>
  );
}

export default BookingForm;