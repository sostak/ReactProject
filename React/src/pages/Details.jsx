import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Table from 'react-bootstrap/Table';
import Button from "react-bootstrap/esm/Button";
import Loader from "../components/Loader";

const Details = () => {
  const location = useLocation();
  const { userId } = location.state;
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://localhost:7085/api/Users/${userId}`)
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setUser(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [userId])

  if(!user && !isLoaded){
    return <Loader />;
  }

  if(error){
    return(
      <h1>Error</h1>
    );
  }
  
  const onSubmit = (event) => {
    event.preventDefault();
    try{
      fetch(`https://localhost:7085/api/Users/${userId}`, {method: 'DELETE'});
      navigate('/');
    }
    catch (error){
      setError(true);
    }
  }

  if (error) {
    return <h1>Error</h1>;
  }

  if (!isLoaded){
    return (<Loader/>);
  }

  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Last name</th>
            <th>Country</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.lastName}</td>
            <td>{user.country}</td>
            <td>{user.age}</td>
          </tr>
        </tbody>
      </Table>
      <Button variant="primary" type="submit" onClick={onSubmit} className='me-3'>
        Delete
      </Button>
      <Button variant="primary" onClick={() => navigate('/UpdateRecord', {state: {user: user}})}>
        Update
      </Button>
    </div> 
    );
}

export default Details;
