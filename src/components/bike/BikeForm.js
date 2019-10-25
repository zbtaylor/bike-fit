import React from "react";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import { Button } from "semantic-ui-react";
import { Container, Grid, Table } from "semantic-ui-react";
import { Form as FormikForm, Field, withFormik } from "formik";
import MainNav from "../nav/MainNav";

const Form = ({ errors, touched, disabled, id }) => {
  return (
    <Container>
      <MainNav />
      <FormikForm className="ui form">
        <Grid columns={2} className="bikeInfo">
          <Grid.Column>
            <div className="field">
              <label>Name</label>
              {touched.name && errors.name && (
                <p className="error">{errors.name}</p>
              )}
              <Field
                type="text"
                name="name"
                placeholder="Pinky"
                disabled={disabled}
              />
            </div>
            <div className="field">
              <label>Brand</label>
              {touched.brand && errors.brand && (
                <p className="error">{errors.brand}</p>
              )}
              <Field
                type="text"
                name="brand"
                placeholder="Specialized"
                disabled={disabled}
              />
            </div>
            <div className="field">
              <label>Model</label>
              {touched.model && errors.model && (
                <p className="error">{errors.model}</p>
              )}
              <Field
                type="text"
                name="model"
                placeholder="Allez Sprint"
                disabled={disabled}
              />
            </div>
            <div className="field">
              <label>Weight (lbs)</label>
              {touched.weight && errors.weight && (
                <p className="error">{errors.weight}</p>
              )}
              <Field type="number" name="weight" disabled={disabled} />
            </div>
            <div className="field">
              <label>Type</label>
              {touched.type && errors.type && (
                <p className="error">{errors.type}</p>
              )}
              <Field component="select" name="type" disabled={disabled}>
                <option value=""></option>
                <option value="Road">Road</option>
                <option value="Mountain">Mountain</option>
                <option value="Time">Time Trial</option>
                <option value="Gravel">Gravel</option>
                <option value="Cross">Cross</option>
                <option value="Fat">Fat</option>
                <option value="Recumbent">Recumbent</option>
              </Field>
            </div>
          </Grid.Column>
          <Grid.Column>
            <Table celled striped columns={2}>
              <Table.Body>
                <Table.Row>
                  <Table.Cell className="measurement">
                    <label>Reach</label>
                  </Table.Cell>
                  <Table.Cell textAlign="center">
                    <div className="field">
                      <Field type="text" name="reach" disabled={disabled} />
                    </div>
                  </Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell className="measurement">
                    <label>Stack</label>
                  </Table.Cell>
                  <Table.Cell textAlign="center">
                    <div className="field">
                      <Field type="text" name="stack" disabled={disabled} />
                    </div>
                  </Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell className="measurement">
                    <label>Wheelbase</label>
                  </Table.Cell>
                  <Table.Cell textAlign="center">
                    <div className="field">
                      <Field type="text" name="wheelbase" disabled={disabled} />
                    </div>
                  </Table.Cell>
                </Table.Row>
              </Table.Body>
            </Table>
          </Grid.Column>
        </Grid>
        {disabled ? (
          <Button as={Link} to={`/bikes/edit/${id}`}>
            Edit
          </Button>
        ) : (
          <Button type="submit" className="ui primary button" value="Add">
            Save
          </Button>
        )}
      </FormikForm>
    </Container>
  );
};

const BikeForm = withFormik({
  mapPropsToValues({ bike }) {
    return {
      name: bike.name || "",
      brand: bike.brand || "",
      model: bike.model || "",
      weight: bike.weight || "",
      type: bike.type || "",
      reach: bike.geometry.reach || "",
      stack: bike.geometry.stack || "",
      wheelbase: bike.geometry.wheelbase || ""
    };
  },

  validationSchema: Yup.object().shape({
    name: Yup.string().required("Name is required."),
    brand: Yup.string().required("Brand is required."),
    model: Yup.string().required("Model is required."),
    weight: Yup.number()
      .required("Weight is required.")
      .positive("That can't be right..."),
    type: Yup.string().required("Type is required.")
  }),

  handleSubmit(values, { props }) {
    // Submit form data here
    props.history.push(`/bikes/view/${props.id}`);
  }
})(Form);

export default BikeForm;
