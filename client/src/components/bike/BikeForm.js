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
              <label>Nickname</label>
              <Field
                type="text"
                name="nickname"
                placeholder="Pinky"
                disabled={disabled}
                className={touched.name && errors.name && "error"}
              />
            </div>
            <div className="field">
              <label>Brand</label>
              <Field
                type="text"
                name="brand"
                placeholder="Specialized"
                disabled={disabled}
                className={touched.brand && errors.brand && "error"}
              />
            </div>
            <div className="field">
              <label>Model</label>
              <Field
                type="text"
                name="model"
                placeholder="Allez Sprint"
                disabled={disabled}
                className={touched.model && errors.model && "error"}
              />
            </div>
            <div className="field">
              <label>Weight (lbs)</label>
              <Field
                type="number"
                name="weight"
                disabled={disabled}
                className={touched.weight && errors.weight && "error"}
              />
            </div>
            <div className="field">
              <label>Type</label>
              <Field
                component="select"
                name="type"
                disabled={disabled}
                className={touched.type && errors.type && "error"}
              >
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
      nickname: bike.nickname || "",
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
