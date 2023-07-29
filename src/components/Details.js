import axios from "axios";
import { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import Table from 'react-bootstrap/Table';
import "./CreateUser.css";

function Details() {
const [data, setdata]=useState([]);
const [c, inc]=useState(0)

useEffect(()=> {
    axios.get("http://localhost:3000/user-data").then((res)=> {
        console.log(res.data)
        setdata(res.data)
    } )
}, [c])

function deletedata(id) {
    axios.delete("http://localhost:3000/user-data/"+id)
    inc(c+1)
}

    return ( 
        <>
        <h1 className="txt-align">Details</h1>
        <Table striped bordered hover className="Form-container">
      <thead>
        <tr>
          <th>id</th>
          <th>fullname</th>
          <th>city</th>
          <th>email</th>
          <th>password</th>
          <th colSpan={2}>Action</th>
        </tr>
      </thead>
      <tbody>
        {
            data.map((e)=> {
                return (
                    <tr>
                    <td>{e.id}</td>
                    <td>{e.fullname}</td>
                    <td>{e.city}</td>
                    <td>{e.email}</td>
                    <td>{e.pass}</td>
                    <td><Link to={"/Edit/"+e.id}><Button>Edit</Button></Link></td>
                    <td><Button onClick={()=>deletedata(e.id)}>Delete</Button></td>
               </tr>
                )
            })
        }
       
      </tbody>
      </Table>
        </>
     );
}

export default Details;