import React, { useState } from "react";
import axios from "axios";
import { Form } from "semantic-ui-react";
import { useFormInput } from "../hooks/useFormInput";

const MyProfileForm = props => {
  const title = useFormInput("");
  const body = useFormInput("");

  const handleSubmit = e => {
    e.preventDefault();
    axios
      .post("/api/profiles", { title: title.value, body: body.value })
      .then(res => {
        props.add(res.data);
        props.toggleForm();
      });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group widths='equal'>
        <Form.Input
          label='Title'
          placeholder='Title'
          name='title'
          required
          {...title}
        />
        <Form.Input
          label='Body'
          placeholder='Body'
          name='body'
          required
          {...title}
        />
      </Form.Group>
      <Form.Button>Submit</Form.Button>
    </Form>
  );
};

export default MyProfileForm;
