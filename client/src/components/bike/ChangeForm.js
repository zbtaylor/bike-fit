import React from "react";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import { Button } from "semantic-ui-react";
import { Container, Grid, Table } from "semantic-ui-react";
import { Form as FormikForm, Field, withFormik } from "formik";
import Axios from "axios";
import MainNav from "../nav/MainNav";

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
            placeholder="How did it feel? How long "
            className={touched.notes && errors.notes && "error"}
          />
        </div>
        <Button type="submit" className="ui primary button">
          Save
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
      bike_id: props.id,
      created_on: new Date().toLocaleDateString(undefined, {
        dateStyle: "short"
      }),
      last_edited: new Date().toLocaleDateString(undefined, {
        dateStyle: "short"
      })
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
