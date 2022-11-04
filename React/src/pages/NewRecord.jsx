import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const NewRecord = () => {
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const onSubmit = async (event) => {
    event.preventDefault();
    const data = 
      {
        'age': event.target.formAge.value,
        'name': event.target.formName.value,
        'lastName': event.target.formLastName.value,
        'country': event.target.formCountry.value
      };
    try{
      const response = await fetch('https://localhost:7085/api/Users', {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify(data)
        }
      );
      const responseData = await response.json();
      navigate('/Details', {state: {userId: responseData.id}});
    }
    catch (error){
      setError(true);
    }
  }

  if(error){
    return(
      <h1>Error</h1>
    );
  }

  return (
    <Form onSubmit={onSubmit}>
      <Form.Group className="mb-3" controlId="formName">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formLastName">
        <Form.Label>Last name</Form.Label>
        <Form.Control type="text" placeholder="Last name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formAge">
        <Form.Label>Age</Form.Label>
        <Form.Control type="number" placeholder="Age" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formCountry">
        <Form.Label>Country</Form.Label>
        <Form.Control type="text" placeholder="Country" />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default NewRecord;
