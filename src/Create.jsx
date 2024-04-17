import axios from "axios";
import { useState } from "react";
import { Button, Row } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { Link, useNavigate } from "react-router-dom";

function Create() {
  const [values, setValues] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    axios
      .post(`http://localhost:8000/users`, values)
      .then((res) => {
        console.log(res);
        navigate("/");
      })
      .catch((err) => console.log(err));
  }

  return (
    <div className="border shadow p-4 ">
      <h1>Add a User</h1>

          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="validationCustom01"  as={Row}>
              <Form.Label>Name:</Form.Label>
              <Form.Control
                required
                size="lg" 
                type="text"
                placeholder="Enter Name"
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
                onChange={(e) =>
                  setValues({ ...values, email: e.target.value })
                }
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupPassword" as={Row}>
              <Form.Label>Phone:</Form.Label>
              <Form.Control
                required
                size="lg" 
                type="text"
                placeholder="Phone"
                onChange={(e) =>
                  setValues({ ...values, phone: e.target.value })
                }
              />
            </Form.Group>
            <Button variant="success" className="me-2" type="submit">
              Submit
            </Button>
            <Link to="/">
              <Button>Back</Button>
            </Link>
          </Form>
    </div>
  );
}

export default Create;
