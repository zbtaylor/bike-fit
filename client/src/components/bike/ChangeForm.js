import React from "react";
import * as Yup from "yup";
import { Button } from "semantic-ui-react";
import { Container } from "semantic-ui-react";
import { Form as FormikForm, Field, withFormik } from "formik";
import Axios from "axios";

const Form = ({ errors, touched, id, match }) => {
  return (
    <Container>
      <FormikForm className="ui form" id="bikeform">
        <div className="field">
          <label>Change</label>
          <Field
            type="text"
            name="description"
            placeholder="Describe the change you made."
            className={touched.description && errors.description && "error"}
          />
        </div>
        <div className="field">
          <label>Notes</label>
          <Field
            type="text"
            name="notes"
            placeholder="How did it feel?"
            className={touched.notes && errors.notes && "error"}
          />
        </div>
        <Button type="submit" className="ui primary button">
          Make a New Change
        </Button>
      </FormikForm>
    </Container>
  );
};

const ChangeForm = withFormik({
  enableReinitialize: true,

  mapPropsToValues(props) {
    return {
      description: props.nickname || "",
      notes: props.notes || ""
    };
  },

  validationSchema: Yup.object().shape({
    description: Yup.string().required("Description is required."),
    notes: Yup.string()
  }),

  handleSubmit(values, { props }) {
    const change = {
      ...values,
      bike_id: props.id
    };
    Axios.post("/api/changes", change)
      .then(res => {
        props.setChanges([...props.changes, res.data]);
      })
      .catch(err => {
        // handle error
        console.log(err);
      });
  }
})(Form);

export default ChangeForm;
