import axios from "axios";
import { useEffect, useState } from "react";
import { Button, Row } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { Link, useNavigate, useParams } from "react-router-dom";


function Update() {
    // const [data, setData] = useState();
    const {id}  = useParams()
    const [values, setValues] = useState({
        name: "",
        email: "",
        phone: "",
    });
    
    const navigate = useNavigate()

        useEffect(() => {
          axios
            .get(`http://localhost:8000/users/` + id)
            .then((res) => setValues(res.data))
            .catch((err) => console.log(err));
        }, [id]);


        function handleUpdate(e) {
            e.preventDefault()
            axios
            .put(`http://localhost:8000/users/`+id, values)
            .then((res) => {
              console.log(res);
              navigate("/");
            })
            .catch((err) => console.log(err));
        }

  return (
    <div className="border shadow p-4 ">
      <h1>Update a User</h1>

      <Form onSubmit={handleUpdate}>
        <Form.Group className="mb-3" controlId="validationCustom01" as={Row}>
          <Form.Label>Name:</Form.Label>
          <Form.Control
            required
            size="lg"
            type="text"
            placeholder="Enter Name"
            value={values?.name}
            onChange={(e) => setValues({ ...values, name: e.target.value })}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupEmail" as={Row}>
          <Form.Label>Email address:</Form.Label>
          <Form.Control
            size="lg"
            required
            type="email"
            placeholder="Enter email"
            value={values?.email}
            onChange={(e) => setValues({ ...values, email: e.target.value })}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupPassword" as={Row}>
          <Form.Label>Phone:</Form.Label>
          <Form.Control
            required
            size="lg"
            type="text"
            placeholder="Phone"
            value={values?.phone}
            onChange={(e) => setValues({ ...values, phone: e.target.value })}
          />
        </Form.Group>
        <Button variant="success" className="me-2" type="submit">
          Update
        </Button>
        <Link to="/">
          <Button>Back</Button>
        </Link>
      </Form>
    </div>
  );
}

export default Update;
