 
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Table from 'react-bootstrap/Table';
import Loader from "../components/Loader";

const List = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('https://localhost:7085/api/Users')
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setUsers(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])

  if(!isLoaded){
    <Loader/>
  }
  
  if(error){
    return(
      <h1>Error</h1>
    );
  }

  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Last name</th>
          </tr>
        </thead>
        <tbody>
        {
          users.map((user) => 
            <tr key={user.id} onClick={() => navigate('/Details', {state: {userId: user.id}})} >
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.lastName}</td>
            </tr>
          )
        }
        </tbody>
      </Table>
    </div> 
  );
}
  
  export default List;