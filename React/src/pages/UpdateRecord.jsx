import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const UpdateRecord = () => {
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();
  const { user } = location.state;

  const onSubmit = async (event) => {
    event.preventDefault();

    const data = {
      'age': event.target.formAge.value,
      'name': event.target.formName.value,
      'lastName': event.target.formLastName.value,
      'country': event.target.formCountry.value
    };

    try{
        fetch(`https://localhost:7085/api/Users/${user.id}`, {
          method: 'PUT',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify(data)
        }
      );
      navigate('/Details', {state: {userId: user.id}});
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
        <Form.Control type="text" placeholder="Name" defaultValue={user.name} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formLastName">
        <Form.Label>Last name</Form.Label>
        <Form.Control type="text" placeholder="Last name" defaultValue={user.lastName}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formAge">
        <Form.Label>Age</Form.Label>
        <Form.Control type="number" placeholder="Age" defaultValue={user.age}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formCountry">
        <Form.Label>Country</Form.Label>
        <Form.Control type="text" placeholder="Country" defaultValue={user.country}/>
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default UpdateRecord;
