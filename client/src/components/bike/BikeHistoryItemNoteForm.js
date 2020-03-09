import React, { useEffect, useState } from "react";
import { Row, Col, Timeline, Button } from "antd";
import { Form, Input, SubmitButton } from "formik-antd";
import { Formik } from "formik";
import * as Yup from "yup";
import Axios from "axios";

const BikeHistoryItemNoteForm = ({ setShowForm, notes, id }) => {
  const initial = { notes: notes || "" };

  const validation = Yup.object().shape({
    notes: Yup.string()
  });

  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    console.log(id);
    Axios.put(`/api/history/${id}`, values)
      .then(res => {
        console.log(res);
        setSubmitting(false);
        setShowForm(false);
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <Formik
      initialValues={initial}
      validationSchema={validation}
      onSubmit={handleSubmit}
      render={() => (
        <Form>
          <Form.Item name="notes">
            <Input.TextArea name="notes" />
          </Form.Item>
          <SubmitButton>Save Note</SubmitButton>
        </Form>
      )}
    />
  );
};

export default BikeHistoryItemNoteForm;
