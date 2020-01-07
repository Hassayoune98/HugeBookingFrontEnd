import React, { Component } from 'react';
import { Button, Card, CardBody, CardFooter, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
import Axios from 'axios';

class Register extends Component {

  constructor()
  {
    super()

    this.state={
      
        username: String ,
        firstName: String,
        lastName: String,
        email: String,
        key: String,
        password: String
     
    }
   this.onSubmit = this.onSubmit.bind(this)
    this.onChange = this.onChange.bind(this)

  }


  onChange=e=>
{
  this.setState({[e.target.name]:e.target.value})
  console.log(e.target.name)
  console.log(e.target.value)

}

  

  onSubmit(e)
{
  e.preventDefault()
  const admin = 
  {
    firstName : this.state.firstName,
    lastName : this.state.lastName,
    username : this.state.username,
    email : this.state.email,
    key :  this.state.key,
    password: this.state.password

  }


  Axios.post('http://localhost:4000/admin/register',admin)
  .then(res => {
    if(res.data.token){
      localStorage.setItem('token',res.data.token)}
      this.props.history.push("/dasboard");
    }
      )
 
    
}


  
  
  render() {
    return (
      <div className="app flex-row align-items-center">
        <Container>
          <Row className="justify-content-center">
            <Col md="9" lg="7" xl="6">
              <Card className="mx-4">
                <CardBody className="p-4">
                <Form onSubmit={this.onSubmit}>
                    <h1>Register</h1>
                    <p className="text-muted">Create your Admin account</p>
                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-user"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input type="text" placeholder="Username" autoComplete="username"  name='username' value={this.state.username} onChange={this.onChange} />
                    </InputGroup>
                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-user"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input type="text" placeholder="firstName" autoComplete="firstName"  name='firstName' value={this.state.firstName} onChange={this.onChange} />
                    </InputGroup>
                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-user"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input type="text" placeholder="lastName" autoComplete="lastName"  name='lastName' value={this.state.lastName} onChange={this.onChange} />
                    </InputGroup>
                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>@</InputGroupText>
                      </InputGroupAddon>
                      <Input type="text" placeholder="Email" autoComplete="email"  name='email' value={this.state.email} onChange={this.onChange} />
                    </InputGroup>
                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-lock"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input type="password" placeholder="Password" autoComplete="new-password"  name='password' value={this.state.password} onChange={this.onChange} />
                    </InputGroup>
                    <InputGroup className="mb-4">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-lock"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input type="password" placeholder="Repeat password" autoComplete="repeat-password"  name='repeatpassword' value={this.state.repeatpassword} onChange={this.onChange} />
                    </InputGroup>

                    <InputGroup className="mb-4">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-puzzle"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input type="password" placeholder="Secret Key" autoComplete="key"  name='key' value={this.state.key} onChange={this.onChange} />
                    </InputGroup>
                    <Button color="success" block>Create Account</Button>
                  </Form>
                </CardBody>
                <CardFooter className="p-4">
                  <Row>

                  </Row>
                </CardFooter>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Register;
