import { Container, Grid, Typography } from "@material-ui/core";
import { Formik } from "formik";
import * as Yup from "yup";

const initialValues = {

};

const validationSchema = Yup.object({

});

const onSubmit = (values, formik) => {
  console.log("Submitted values:", values);
};

function Form() {
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
            <Grid item xs={12}>
              <Typography>
                Address
              </Typography>
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

export default Form;
