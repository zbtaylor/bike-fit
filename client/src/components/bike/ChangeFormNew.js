import React, { useState } from "react";
import * as Yup from "yup";
import { Button } from "semantic-ui-react";
import { Container } from "semantic-ui-react";
import { Form as FormikForm, Field, withFormik } from "formik";
import Axios from "axios";

const Form = ({ errors, touched, id, match }) => {
  return (
    <FormikForm id="changeFormNew" className="ui form visible">
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
        {`Make Change`}
      </Button>
    </FormikForm>
  );
};

const ChangeFormNew = withFormik({
  enableReinitialize: true,

  mapPropsToValues(props) {
    return {
      description: props.description || "",
      notes: props.notes || ""
    };
  },

  validationSchema: Yup.object().shape({
    description: Yup.string().required("Description is required."),
    notes: Yup.string()
  }),

  handleSubmit(values, { props, resetForm }) {
    const change = {
      ...values,
      bike_id: props.bike_id
    };
    Axios.post("/api/changes", change)
      .then(res => {
        props.setChanges(res.data);
        resetForm();
      })
      .catch(err => {
        // handle error
        console.log(err);
      });
  }
})(Form);

export default ChangeFormNew;
