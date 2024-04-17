import axios from "axios";
import Button from "react-bootstrap/Button";
import { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";

function Home() {
  const [data, setData] = useState();

  useEffect(() => {
    axios
      .get(`http://localhost:8000/users`)
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

function handleDelete(id) {
    const confirm = window.confirm(`Would you like to Delete? ${id}`)
    if(confirm) {
        axios
        .delete(`http://localhost:8000/users/` + id)
        .then((res) => {
            console.log(res)
            location.reload()
        })
        .catch((err) => console.log(err));
    }
}

  return (
    <div className="text-center">
      <h1>Contact List</h1>
      <div className="border shadow p-4 mb-10">
        <div className="justify-content-end d-flex">
          <Link to="/create">
            <Button className="" variant="success">
              Add +
            </Button>
          </Link>
        </div>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((user, i) => (
              <tr key={i}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>
                  <Link to={`/read/${user.id}`}>
                    <Button variant="info" className="me-2">
                      Read
                    </Button>
                  </Link>
                  <Link to={`/update/${user.id}`}>
                  <Button variant="primary" className="me-2">
                    Edit
                  </Button>
                  </Link>
                  <Button variant="danger" onClick={() => handleDelete(user.id)}>Delete</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default Home;
