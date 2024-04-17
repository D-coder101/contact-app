import axios from "axios";
import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";

function Read() {
    const [data, setData] = useState();
const {id}  = useParams()

    useEffect(() => {
      axios
        .get(`http://localhost:8000/users/` + id)
        .then((res) => setData(res.data))
        .catch((err) => console.log(err));
    }, [id]);


    return (
        <div className="border shadow p-4 w-100">
            <h1>Detail of User</h1>
            <div className="mb-2">
                <strong>Name: {data?.name}</strong>
            </div>
            <div className="mb-2">
                <strong>Email: {data?.email}</strong>
            </div>
            <div className="mb-2">
                <strong>Phone: {data?.phone}</strong>
            </div>
            <Link to={`/update/${id}`}>
                <Button variant="success" className="me-2">Edit</Button>
            </Link>
            <Link to="/">
                <Button>Back</Button>
            </Link>
        </div>
    )
}

export default Read