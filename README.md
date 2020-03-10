# [formik-material-ui](https://stackworx.github.io/formik-material-ui/docs/guide/getting-started)
 
## Usage 
```jsx
import * as React from "react";

import { Formik, Form, Field } from "formik";
import { Button, LinearProgress } from "@material-ui/core";
import { TextField } from "formik-material-ui";

interface Values {
  email: string;
  password: string;
}

export default function LoginForm() {
  return (
    <div className="App">
      <Formik
        initialValues={{
          email: "",
          password: ""
        }}
        validate={values => {
          const errors: Partial<Values> = {};
          if (!values.email) {
            errors.email = "Required";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
          ) {
            errors.email = "Invalid email address";
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            setSubmitting(false);
            alert(JSON.stringify(values, null, 2));
          }, 500);
        }}
      >
        {({ submitForm, isSubmitting }) => (
          <Form>
            <Field
              component={TextField}
              name="email"
              type="email"
              label="Email"
            />
            <br />
            <Field
              component={TextField}
              type="password"
              label="Password"
              name="password"
            />
            {isSubmitting && <LinearProgress />}
            <br />
            <Button
              variant="contained"
              color="primary"
              disabled={isSubmitting}
              onClick={submitForm}
            >
              Submit
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
```

## [Material-UI Pickers](https://material-ui-pickers.dev/getting-started/installation)
```jsx
import * as React from "react";
import { Formik, Form, Field } from "formik";
import { Button, LinearProgress } from "@material-ui/core";
import {
  TimePicker,
  DatePicker,
  DateTimePicker
} from "formik-material-ui-pickers";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";

import DateFnsUtils from "@date-io/date-fns";

export default function PickerComponent() {
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Formik
        initialValues={{
          date: new Date(),
          time: new Date(),
          dateTime: new Date()
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            setSubmitting(false);
            alert(JSON.stringify(values, null, 2));
          }, 500);
        }}
      >
        {({ submitForm, isSubmitting }) => (
          <Form>
            <Field component={TimePicker} name="time" label="Time" />
            <br />
            <Field component={DatePicker} name="date" label="Date" />
            <br />
            <Field
              component={DateTimePicker}
              name="dateTime"
              label="Date Time"
            />
            {isSubmitting && <LinearProgress />}
            <br />
            <Button
              variant="contained"
              color="primary"
              disabled={isSubmitting}
              onClick={submitForm}
            >
              Submit
            </Button>
          </Form>
        )}
      </Formik>
    </MuiPickersUtilsProvider>
  );
}
```

:arrow_forward: **Demo**: [https://codesandbox.io/s/formik-material-ui-mh8zk](https://codesandbox.io/s/formik-material-ui-mh8zk)
