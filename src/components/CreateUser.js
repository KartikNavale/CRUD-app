import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from "axios";
import Alert from "react-bootstrap/Alert";
import "./CreateUser.css";

function CreateUser() {
  var [ufullname, setufullname] = useState();
  var [ucity, setucity] = useState();
  var [uemail, setuemail] = useState();
  var [upass, setupass] = useState();
  var [alrt, setalrt] = useState(false);

  function submithandler(r) {
    r.preventDefault();
    var data = {
      fullname: ufullname,
      city: ucity,
      email: uemail,
      pass: upass,
    };
    console.log(data);
    axios.post("http://localhost:3000/user-data", data);
    setufullname("");
    setucity("");
    setuemail("");
    setupass("");
    setalrt(true)
  }

  return (
    <>
      {alrt ? <Alert variant={"success"}>Regesterd successfull</Alert> : null}
      <h1 className="txt-align">Create User</h1>
      <Form className="Form-container">
        <Form.Group className="mb-3 Form-group" controlId="formBasicEmail">
          <Form.Label className="Form-lable">Name</Form.Label>
          <Form.Control
            type="text"
            className="Form-control"
            value={ufullname}
            placeholder="Enter name"
            onChange={(d) => setufullname(d.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3 Form-group" controlId="formBasicEmail">
          <Form.Label className="Form-lable">City</Form.Label>
          <Form.Control
            type="text"
            className="Form-control"
            value={ucity}
            placeholder="Enter city"
            onChange={(d) => setucity(d.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3 Form-group" controlId="formBasicEmail">
          <Form.Label className="Form-lable">Email address</Form.Label>
          <Form.Control
            type="email"
            className="Form-control"
            value={uemail}
            placeholder="Enter email"
            onChange={(d) => setuemail(d.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3 Form-group" controlId="formBasicPassword">
          <Form.Label className="Form-lable">Password</Form.Label>
          <Form.Control
            type="password"
            className="Form-control"
            value={upass}
            placeholder="Password"
            onChange={(d) => setupass(d.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3 Form-group" controlId="formBasicCheckbox"></Form.Group>
        <Button
        className="From-submit-btn"
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

export default CreateUser;
