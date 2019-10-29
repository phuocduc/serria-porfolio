import React,{useState} from "react";
import {useHistory} from 'react-router-dom'
import {Container, Row, Form, Button } from "react-bootstrap";
import {useDispatch} from 'react-redux'

export default function Login() {
  const [currentUser, setCurrentUser] = useState({})
  const history = useHistory()
  const dispatch = useDispatch()
  const onSubmit = (e) =>{
    e.preventDefault()
    history.push('/candidates')
    dispatch({type:'SIGN_IN',payload:currentUser})
  }

  return (
    <Container fluid={true} className="container-fluid Login-form-container">
          <Row className="Login-form-row">
          <Form onSubmit={onSubmit}  className="Login-form">
            <Form.Text className="Login-form-Logintext">LOGIN</Form.Text>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control onChange={(e)=>setCurrentUser({...currentUser, email: e.target.value})}  type="email" placeholder="Enter email" />
             
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control onChange={(e)=>setCurrentUser({...currentUser, pass: e.target.value})} type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Remember" />
            </Form.Group>
            <Button className="Login-form-button" variant="primary" type="submit">
              Submit
            </Button>
          </Form>
          </Row>
    </Container>
  );
}
