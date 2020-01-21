import React, { useState } from "react";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import { Table, Button } from "semantic-ui-react";
import { Form as FormikForm, Field, withFormik } from "formik";
import Axios from "axios";

const Form = ({
  bike,
  errors,
  touched,
  id,
  match,
  openModal,
  setHovered,
  disabled
}) => {
  return (
    <FormikForm className="ui form bikeForm">
      <Table basic="very" compact celled columns={2}>
        <Table.Body>
          <Table.Row
            onMouseEnter={() => setHovered("saddleHeight")}
            onMouseLeave={() => setHovered(null)}
          >
            <Table.Cell className="measurement">
              <label>Saddle Height</label>
            </Table.Cell>
            <Table.Cell textAlign="center">
              <div className="field">
                <Field type="text" name="saddleHeight" />
              </div>
            </Table.Cell>
          </Table.Row>

          <Table.Row
            onMouseEnter={() => setHovered("saddleHeightOverBars")}
            onMouseLeave={() => setHovered(null)}
          >
            <Table.Cell className="measurement">
              <label>Saddle Height Over Bars</label>
            </Table.Cell>
            <Table.Cell textAlign="center">
              <div className="field">
                <Field type="text" name="saddleHeightOverBars" />
              </div>
            </Table.Cell>
          </Table.Row>

          <Table.Row
            onMouseEnter={() => setHovered("saddleToHandlebar")}
            onMouseLeave={() => setHovered(null)}
          >
            <Table.Cell className="measurement">
              <label>Saddle to Handlebar Reach</label>
            </Table.Cell>
            <Table.Cell textAlign="center">
              <div className="field">
                <Field type="text" name="saddleToHandlebar" />
              </div>
            </Table.Cell>
          </Table.Row>

          <Table.Row
            onMouseEnter={() => setHovered("saddleAngle")}
            onMouseLeave={() => setHovered(null)}
          >
            <Table.Cell className="measurement">
              <label>Saddle Angle</label>
            </Table.Cell>
            <Table.Cell textAlign="center">
              <div className="field">
                <Field type="text" name="saddleAngle" />
              </div>
            </Table.Cell>
          </Table.Row>

          <Table.Row
            onMouseEnter={() => setHovered("saddleForeAft")}
            onMouseLeave={() => setHovered(null)}
          >
            <Table.Cell className="measurement">
              <label>Saddle Fore-Aft</label>
            </Table.Cell>
            <Table.Cell textAlign="center">
              <div className="field">
                <Field type="text" name="saddleForeAft" />
              </div>
            </Table.Cell>
          </Table.Row>

          <Table.Row
            onMouseEnter={() => setHovered("saddleBrandModel")}
            onMouseLeave={() => setHovered(null)}
          >
            <Table.Cell className="measurement">
              <label>Saddle Brand &amp; Model</label>
            </Table.Cell>
            <Table.Cell textAlign="center">
              <div className="field">
                <Field type="text" name="saddleBrandModel" />
              </div>
            </Table.Cell>
          </Table.Row>

          <Table.Row
            onMouseEnter={() => setHovered("stemLength")}
            onMouseLeave={() => setHovered(null)}
          >
            <Table.Cell className="measurement">
              <label>Stem Length</label>
            </Table.Cell>
            <Table.Cell textAlign="center">
              <div className="field">
                <Field type="text" name="stemLength" />
              </div>
            </Table.Cell>
          </Table.Row>

          <Table.Row
            onMouseEnter={() => setHovered("stemAngle")}
            onMouseLeave={() => setHovered(null)}
          >
            <Table.Cell className="measurement">
              <label>Stem Angle</label>
            </Table.Cell>
            <Table.Cell textAlign="center">
              <div className="field">
                <Field type="text" name="stemAngle" />
              </div>
            </Table.Cell>
          </Table.Row>

          <Table.Row
            onMouseEnter={() => setHovered("handlebarBrandModel")}
            onMouseLeave={() => setHovered(null)}
          >
            <Table.Cell className="measurement">
              <label>Handlebar Brand &amp; Model</label>
            </Table.Cell>
            <Table.Cell textAlign="center">
              <div className="field">
                <Field type="text" name="handlebarBrandModel" />
              </div>
            </Table.Cell>
          </Table.Row>

          <Table.Row
            onMouseEnter={() => setHovered("handlebarWidth")}
            onMouseLeave={() => setHovered(null)}
          >
            <Table.Cell className="measurement">
              <label>Handlebar Width</label>
            </Table.Cell>
            <Table.Cell textAlign="center">
              <div className="field">
                <Field type="text" name="handlebarWidth" />
              </div>
            </Table.Cell>
          </Table.Row>

          <Table.Row
            onMouseEnter={() => setHovered("handlebarAngle")}
            onMouseLeave={() => setHovered(null)}
          >
            <Table.Cell className="measurement">
              <label>Handlebar Angle</label>
            </Table.Cell>
            <Table.Cell textAlign="center">
              <div className="field">
                <Field type="text" name="handlebarAngle" />
              </div>
            </Table.Cell>
          </Table.Row>

          <Table.Row
            onMouseEnter={() => setHovered("brakeLeverPosition")}
            onMouseLeave={() => setHovered(null)}
          >
            <Table.Cell className="measurement">
              <label>Brake Lever Position</label>
            </Table.Cell>
            <Table.Cell textAlign="center">
              <div className="field">
                <Field type="text" name="brakeLeverPosition" />
              </div>
            </Table.Cell>
          </Table.Row>

          <Table.Row
            onMouseEnter={() => setHovered("crankLength")}
            onMouseLeave={() => setHovered(null)}
          >
            <Table.Cell className="measurement">
              <label>Crank Length</label>
            </Table.Cell>
            <Table.Cell textAlign="center">
              <div className="field">
                <Field type="text" name="crankLength" />
              </div>
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
      <Button type="Submit">Save</Button>
    </FormikForm>
  );
};

const BikeMeasurementsForm = withFormik({
  enableReinitialize: true,

  mapPropsToValues({ bike }) {
    return {
      saddleHeight: bike.saddleHeight || "",
      saddleHeightOverBars: bike.saddleHeightOverBars || "",
      saddleToHandlebar: bike.saddleToHandlebar || "",
      saddleAngle: bike.saddleAngle || "",
      saddleForeAft: bike.saddleForeAft || "",
      saddleBrandModel: bike.saddleBrandModel || "",
      stemLength: bike.stemLength || "",
      stemAngle: bike.stemAngle || "",
      handlebarBrandModel: bike.handlebarBrandModel || "",
      handlebarWidth: bike.handlebarWidth || "",
      handlebarAngle: bike.handlebarAngle || "",
      brakeLeverPosition: bike.brakeLeverPosition || "",
      crankLength: bike.crankLength || ""
    };
  },

  validationSchema: Yup.object().shape({
    saddleHeight: Yup.number(),
    saddleHeightOverBars: Yup.number(),
    saddleToHandlebar: Yup.number(),
    saddleAngle: Yup.number(),
    saddleForeAft: Yup.number(),
    saddleBrandModel: Yup.string(),
    stemLength: Yup.number(),
    stemAngle: Yup.number(),
    handlebarBrandModel: Yup.string(),
    handlebarWidth: Yup.number(),
    handlebarAngle: Yup.number(),
    brakeLeverPosition: Yup.number(),
    crankLength: Yup.number()
  }),

  handleSubmit(values, { props }) {
    Axios.put(`/api/bikes/${props.id}`, values)
      .then(res => {
        props.history.push(`/bikes/view/${props.id}`);
      })
      .catch(err => {
        console.log(err);
      });
  }
})(Form);

export default BikeMeasurementsForm;
