import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./CreateUser.css";

function Edit() {
  const { id } = useParams();
  var [ufullname, setufullname] = useState();
  var [ucity, setucity] = useState();
  var [uemail, setuemail] = useState();
  var [upass, setupass] = useState();
  var [alrt, setalrt] = useState(false);

  useEffect(() => {
    axios.get("http://localhost:3000/user-data/" + id).then((res) => {
      setufullname(res.data.fullname);
      setucity(res.data.city);
      setuemail(res.data.email);
      setupass(res.data.pass);
    });
  }, [id]);

  function submithandler(r) {
    r.preventDefault();
    var data = {
      fullname: ufullname,
      city: ucity,
      email: uemail,
      pass: upass,
    };
    console.log(data);
    axios.post("http://localhost:3000/user-data/", data);
    setufullname("");
    setucity("");
    setuemail("");
    setupass("");
    setalrt(true);
  }
  return (
    <>
      {alrt ? <Alert variant={"success"}>Update successfull</Alert> : null}
      <h1 className="txt-align">Edit User Details</h1>
      <Form className="Form-container">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter name"
            onChange={(d) => setufullname(d.target.value)}
            value={ufullname}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>City</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter city"
            onChange={(d) => setucity(d.target.value)}
            value={ucity}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            onChange={(d) => setuemail(d.target.value)}
            value={uemail}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={(d) => setupass(d.target.value)}
            value={upass}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox"></Form.Group>
        <Button
          variant="primary"
          type="submit"
          onClick={(r) => submithandler(r)}
        >
          Submit
        </Button>
      </Form>
    </>
  );
}

export default Edit;
