import React from "react";
import * as Yup from "yup";
import { Button } from "semantic-ui-react";
import { Container } from "semantic-ui-react";
import { Form as FormikForm, Field, withFormik } from "formik";
import Axios from "axios";

const Form = ({ errors, touched, id, match, visible }) => {
  return (
    <FormikForm
      id="changeForm"
      className={`${visible ? "visible" : ""} ui form`}
    >
      <div className="field">
        <Field
          type="text"
          name="description"
          placeholder="Describe the change you made."
          className={touched.description && errors.description && "error"}
        />
      </div>
      <div className="field">
        <Field
          type="text"
          name="notes"
          placeholder="How did it feel?"
          className={touched.notes && errors.notes && "error"}
        />
      </div>
      <Button type="submit" className="ui primary button">
        Edit Change
      </Button>
    </FormikForm>
  );
};

const ChangeFormEdit = withFormik({
  enableReinitialize: true,

  mapPropsToValues(props) {
    return {
      description: props.description,
      notes: props.notes
    };
  },

  validationSchema: Yup.object().shape({
    description: Yup.string().required("Description is required."),
    notes: Yup.string()
  }),

  handleSubmit(values, { props, resetForm }) {
    const update = {
      ...values,
      bike_id: props.bike_id
    };
    Axios.put(`/api/changes/${props.id}`, update)
      .then(res => {
        props.setChanges(res.data);
        props.setVisible(false);
        resetForm();
      })
      .catch(err => {
        // handle error
        console.log(err);
      });
  }
})(Form);

export default ChangeFormEdit;
