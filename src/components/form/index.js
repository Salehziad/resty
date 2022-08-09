import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './form.scss';
import Swal from "sweetalert2"; 
function FORM (props) {
  console.log(props)
  const handleSubmit= e=> {
    e.preventDefault();
    const formData = {
      method:'GET',
      url: 'https://pokeapi.co/api/v2/pokemon',
    };
    props.handleApiCall(formData);

  }


    return (
      <>
      <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3">
        <Form.Label>Url</Form.Label>
        <Form.Control placeholder="Enter Url"  />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Select Method</Form.Label>
        <Form.Select >
          <option>GET</option>
          <option>POST</option>
          <option>PUT</option>
          <option>DELETE</option>
        </Form.Select>
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
      </Form>

      </>
    );
}

export default FORM;
