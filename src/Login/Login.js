import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Alert, Card, CardBody, CardGroup, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
import axios from 'axios';
import isEmpty from './isEmpty';

// Toast
import toast from 'toasted-notes'
import 'toasted-notes/src/styles.css';

class Login extends Component {


  constructor(props) {
    super(props)

    this.state = {
      username: '',
      password: '',
      usernameError: true,
      passwordError: true,
      submitStatus: false


    }
    this.onSubmit = this.onSubmit.bind(this)
    this.onChange = this.onChange.bind(this)



  }
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value })


  }

  onSubmit(e) {
    e.preventDefault();
    const user = {
      username: this.state.username,
      password: this.state.password
    }

    if (isEmpty(this.state.username)) {
      this.setState({ usernameError: false });
    } else {
      this.setState({ usernameError: true });

    }

    if (isEmpty(this.state.password)) {
      this.setState({
        passwordError: false
      });
    } else {
      this.setState({
        passwordError: true
      });

    }






    if (this.state.usernameError && this.state.passwordError) {

      axios.post("http://localhost:4000/users/authenticate", user)
        .then(res => {
          if (res.data.token) {
            localStorage.setItem('token', res.data.token)
            this.props.history.push("/dasboard");
          }
        }).catch(e => {
          toast.notify("please check your username or your password are incorrect", {
            duration: 4000
          });
        }

        );
    }


  }


  componentDidCatch(error, info) {

  }


  render() {
    return (
      <div className="app flex-row align-items-center">
        <Container>
          <Row className="justify-content-center">
            <Col md="8">
              <CardGroup>
                <Card className="p-4">
                  <CardBody>
                    <Form onSubmit={this.onSubmit} method="post" encType="multipart/form-data" className="form-horizontal">
                      <h1>Login</h1>
                      <p className="text-muted">Sign In to your account</p>
                      <InputGroup className="mb-3">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-user"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input type="text" placeholder="Username" name="username" autoComplete="username" value={this.state.username} onChange={this.onChange} />


                      </InputGroup>
                      <p>  {this.state.usernameError ? null : <Alert color="danger">

                        <a className="alert-link">username is required</a>.
   </Alert>}</p>
                      <InputGroup className="mb-4">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-lock"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input type="password" placeholder="Password" name="password" autoComplete="current-password" value={this.state.password} onChange={this.onChange} />

                      </InputGroup>
                      <p>  {this.state.passwordError ? null : <Alert color="danger">

                        <a className="alert-link">password is required</a>.
   </Alert>}</p>
                      <Row>
                        <Col xs="6">
                          <Button color="primary" className="px-4">Login</Button>
                        </Col>

                        <Col xs="6" className="text-right">
                          <Link to="/reset-password">     <Button color="link" className="px-0">Forgot password?</Button></Link>
                        </Col>
                      </Row>
                    </Form>
                  </CardBody>
                </Card>
                {/* <Card className="text-white bg-primary py-5 d-md-down-none" style={{ width: '44%' }}>
                  <CardBody className="text-center">
                    <div>
                      <h2>Sign up</h2>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua.</p>
                      <Link to="/register">
                        <Button color="primary" className="mt-3" active tabIndex={-1}>Register Now!</Button>
                      </Link>
                    </div>
                  </CardBody>
                </Card> */}
              </CardGroup>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Login;
