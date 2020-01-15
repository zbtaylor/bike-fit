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
      <div className="buttons">
        {!disabled && (
          <>
            <Button type="submit" className="ui primary button bikeFormBtn">
              Save Changes
            </Button>
            <Button className="ui button bikeFormBtn">Cancel</Button>
          </>
        )}
        {openModal && (
          <Button
            type="button"
            className="bikeFormModalBtn"
            onClick={() => openModal()}
          >
            Delete
          </Button>
        )}
      </div>
      <div className="field">
        <Field
          type="text"
          name="nickname"
          placeholder="Nickname"
          disabled={disabled}
          className={touched.nickname && errors.nickname && "error"}
        />
      </div>
      <div className="field">
        <Field
          type="text"
          name="brand"
          placeholder="Brand"
          disabled={disabled}
          className={touched.brand && errors.brand && "error"}
        />
      </div>
      <div className="field">
        <Field
          type="text"
          name="model"
          placeholder="Model"
          disabled={disabled}
          className={touched.model && errors.model && "error"}
        />
      </div>
      <div className="field">
        <Field
          component="select"
          name="type"
          disabled={disabled}
          className={touched.type && errors.type && "error"}
        >
          <option value="Road">Road</option>
          <option value="Mountain">Mountain</option>
          <option value="Time">Time Trial</option>
          <option value="Gravel">Gravel</option>
          <option value="Cross">Cross</option>
          <option value="Fat">Fat</option>
          <option value="Recumbent">Recumbent</option>
        </Field>
      </div>
      <Table compact celled striped columns={2}>
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
                <Field type="text" name="reach" disabled={disabled} />
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
                <Field type="text" name="reach" disabled={disabled} />
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
                <Field type="text" name="reach" disabled={disabled} />
              </div>
            </Table.Cell>
          </Table.Row>

          <Table.Row>
            <Table.Cell className="measurement">
              <label>Saddle Angle</label>
            </Table.Cell>
            <Table.Cell textAlign="center">
              <div className="field">
                <Field type="text" name="reach" disabled={disabled} />
              </div>
            </Table.Cell>
          </Table.Row>

          <Table.Row>
            <Table.Cell className="measurement">
              <label>Saddle Fore-Aft</label>
            </Table.Cell>
            <Table.Cell textAlign="center">
              <div className="field">
                <Field type="text" name="reach" disabled={disabled} />
              </div>
            </Table.Cell>
          </Table.Row>

          <Table.Row>
            <Table.Cell className="measurement">
              <label>Saddle Brand &amp; Model</label>
            </Table.Cell>
            <Table.Cell textAlign="center">
              <div className="field">
                <Field type="text" name="reach" disabled={disabled} />
              </div>
            </Table.Cell>
          </Table.Row>

          <Table.Row>
            <Table.Cell className="measurement">
              <label>Stem Length</label>
            </Table.Cell>
            <Table.Cell textAlign="center">
              <div className="field">
                <Field type="text" name="reach" disabled={disabled} />
              </div>
            </Table.Cell>
          </Table.Row>

          <Table.Row>
            <Table.Cell className="measurement">
              <label>Stem Angle</label>
            </Table.Cell>
            <Table.Cell textAlign="center">
              <div className="field">
                <Field type="text" name="reach" disabled={disabled} />
              </div>
            </Table.Cell>
          </Table.Row>

          <Table.Row>
            <Table.Cell className="measurement">
              <label>Handlebar Brand &amp; Model</label>
            </Table.Cell>
            <Table.Cell textAlign="center">
              <div className="field">
                <Field type="text" name="reach" disabled={disabled} />
              </div>
            </Table.Cell>
          </Table.Row>

          <Table.Row>
            <Table.Cell className="measurement">
              <label>Handlebar Width</label>
            </Table.Cell>
            <Table.Cell textAlign="center">
              <div className="field">
                <Field type="text" name="reach" disabled={disabled} />
              </div>
            </Table.Cell>
          </Table.Row>

          <Table.Row>
            <Table.Cell className="measurement">
              <label>Handlebar Angle</label>
            </Table.Cell>
            <Table.Cell textAlign="center">
              <div className="field">
                <Field type="text" name="reach" disabled={disabled} />
              </div>
            </Table.Cell>
          </Table.Row>

          <Table.Row>
            <Table.Cell className="measurement">
              <label>Handlebar Extension</label>
            </Table.Cell>
            <Table.Cell textAlign="center">
              <div className="field">
                <Field type="text" name="reach" disabled={disabled} />
              </div>
            </Table.Cell>
          </Table.Row>

          <Table.Row>
            <Table.Cell className="measurement">
              <label>Brake Lever Position</label>
            </Table.Cell>
            <Table.Cell textAlign="center">
              <div className="field">
                <Field type="text" name="reach" disabled={disabled} />
              </div>
            </Table.Cell>
          </Table.Row>

          <Table.Row>
            <Table.Cell className="measurement">
              <label>Crank Length</label>
            </Table.Cell>
            <Table.Cell textAlign="center">
              <div className="field">
                <Field type="text" name="reach" disabled={disabled} />
              </div>
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </FormikForm>
  );
};

const BikeForm = withFormik({
  enableReinitialize: true,

  mapPropsToValues({ bike }) {
    return {
      nickname: bike.nickname || "",
      brand: bike.brand || "",
      model: bike.model || "",
      weight: bike.weight || "",
      type: bike.type || "",
      reach: bike.reach || "",
      stack: bike.stack || "",
      wheelbase: bike.wheelbase || ""
    };
  },

  validationSchema: Yup.object().shape({
    nickname: Yup.string().required("Name is required."),
    brand: Yup.string().required("Brand is required."),
    model: Yup.string().required("Model is required."),
    type: Yup.string().required("Type is required.")
  }),

  // validationSchema: Yup.object().shape({}),

  handleSubmit(values, { props }) {
    if (props.match.url === "/bikes/new") {
      // POST
      Axios.post("/api/bikes", values)
        .then(res => {
          props.history.push(`/bikes`);
        })
        .catch(err => {
          // handle error
          console.log(err);
        });
    } else {
      // PUT
      Axios.put(`/api/bikes/${props.id}`, values)
        .then(res => {
          props.history.push(`/bikes/view/${props.id}`);
        })
        .catch(err => {
          // handle error
          console.log(err);
        });
    }
  }
})(Form);

export default BikeForm;
