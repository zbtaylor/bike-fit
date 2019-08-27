import React from "react";
import { Button } from "semantic-ui-react";
import { Form, Field, withFormik } from "formik";
import Axios from "axios";
import * as Yup from "yup";
import MainNav from "../nav/MainNav";

const AddBike = props => {
  const { errors, touched } = props;

  return (
    <>
      <MainNav />
      <h2>Add Bike</h2>
      <Form className="ui form">
        <div className="field">
          <label>Name</label>
          {touched.name && errors.name && (
            <p className="error">{errors.name}</p>
          )}
          <Field type="text" name="name" placeholder="Pinky" />
        </div>
        <div className="field">
          <label>Brand</label>
          {touched.brand && errors.brand && (
            <p className="error">{errors.brand}</p>
          )}
          <Field type="text" name="brand" placeholder="Specialized" />
        </div>
        <div className="field">
          <label>Model</label>
          {touched.model && errors.model && (
            <p className="error">{errors.model}</p>
          )}
          <Field type="text" name="model" placeholder="Allez Sprint" />
        </div>
        <div className="field">
          <label>Weight (lbs)</label>
          {touched.weight && errors.weight && (
            <p className="error">{errors.weight}</p>
          )}
          <Field type="number" name="weight" />
        </div>
        <div className="field">
          <label>Type</label>
          {touched.type && errors.type && (
            <p className="error">{errors.type}</p>
          )}
          <Field component="select" name="type">
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
        <Button type="submit" className="ui primary button">
          Add Bike
        </Button>
      </Form>
    </>
  );
};

const AddBikeFormik = withFormik({
  mapPropsToValues({ name, brand, model, weight, type }) {
    return {
      name: name || "",
      brand: brand || "",
      model: model || "",
      weight: weight || "",
      type: type || ""
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
    props.history.push("/bikes");
    // Axios.post(
    //   `https://lambda-guidr.herokuapp.com/api/auth/${props.endpoint}`,
    //   values
    // )
    //   .then(response => {
    //     if (response.data.token) {
    //       props.history.push("/bikes");
    //     }
    //   })
    //   .catch(error => {
    //     console.log(error);
    //   });
  }
})(AddBike);

export default AddBikeFormik;
