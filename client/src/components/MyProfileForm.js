import React, { useState } from "react";
import axios from "axios";
import { Form } from "semantic-ui-react";
// import { useFormInput } from "../hooks/useFormInput";

const MyProfileForm = props => {

  const [name, setName] = useState("");
  const [dob, setDob] = useState("");
  const [avatar, setAvatar] = useState("");


  const handleNameChange = (e) => {
    setName(e.target.value)
  }

  const handleDobChange = (e) => {
    setDob(e.target.value)
  }

  const handleAvatarChange = (e) => {
    setAvatar(e.target.value)
  }
  const handleSubmit = e => {
    e.preventDefault();
    debugger
    axios
      .post("/api/profiles", { name, dob, avatar })
      .then(res => {
      })
      .catch(err => console.log(err))
    props.history.push('/')
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group widths='equal'>
        <Form.Input
          label='Name'
          placeholder='Name'
          name='name'
          required
          onChange={handleNameChange}
          value={name}
        />
        <Form.Input
          label='Dob'
          placeholder='Date of Birth'
          name='dob'
          required
          onChange={handleDobChange}
          value={dob}
        />
        <Form.Input
          label='Avatar'
          placeholder='Avatar'
          name='avatar'
          required
          onChange={handleAvatarChange}
          value={avatar}
        />

      </Form.Group>
      <Form.Button>Submit</Form.Button>
    </Form>
  );
};

export default MyProfileForm;
