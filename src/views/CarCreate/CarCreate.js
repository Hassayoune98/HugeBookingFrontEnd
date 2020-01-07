import React, { Component } from 'react';
import { Card, CardBody,CardHeader, CardFooter,Col,FormText,
    Input ,Row,Form,FormGroup,Label, Badge} from 'reactstrap';
import { mapToCssModules } from 'reactstrap/lib/utils';
import Widget02 from '../Widgets/Widget02';
import { Bar, Doughnut, Line, Pie, Polar, Radar } from 'react-chartjs-2';
import axios from 'axios';
import {BrowserRouter as Router, Link} from 'react-router-dom';
import {withRouter} from 'react-router-dom'
import { 
  Button, ButtonGroup, Table} from 'reactstrap';
import Moment from 'react-moment';
//import Modal from 'react-bootstrap/Modal';





 
class CarCreate extends Component {
 
constructor(props)
{
  super(props)
  
  this.state= {
    model:String,
    name: String,
    status: String,
    price:Number,
    disponibility: String,
  
   }
   this.onSubmit = this.onSubmit.bind(this)
   this.onChange = this.onChange.bind(this)

}


componentDidMount(){
  console.log("state :", this.state)
 
}

onChange=e=>
{
  this.setState({[e.target.name]:e.target.value})
}


onSubmit(e)
{
  e.preventDefault();
  console.log("STATE ::: ",this.state)
   const car = {

       model:this.state.model,
       name: this.state.name,
       status: this.state.status,
       price:this.state.price,
       disponibility: this.state.disponibility,
     

  } 
 
  axios.post("http://localhost:4000/VoitureOptionService/create",car,
  {
    headers: { idservice: this.props.match.params.idservice}}
  ).then(
    this.props.history.push({
       pathname:`/ListLocation/ListLocationCarService/details/${this.props.match.params.idservice}`,
      
     })

  )
  
}


render() {
  

      return(
   <div className="animated fadeIn">
      <Row>
      <Col xs="12"sm="6"lg="12">
            <Card>
            <CardHeader>     
             Car Create
            </CardHeader>
            <CardBody>
            <Form onSubmit={this.onSubmit} method="post" encType="multipart/form-data" className="form-horizontal" >
            <FormGroup row>
                    <Col md="3">
                      <Label>Name</Label>
                    </Col>
                    <Col xs="12" md="9">
                    <Input type="text" id="name" name="name" value={this.state.name}      onChange={this.onChange} placeholder="Text" required />
                                         </Col>
                  </FormGroup>

                  <FormGroup row>
                    <Col md="3">
                      <Label>Model</Label>
                    </Col>
                    <Col xs="12" md="9">
                    <Input type="text" name="model" id="model" value={this.state.model}     onChange={this.onChange} rows="9"
                             required/>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label>Price/Day</Label>
                    </Col>
                    <Col xs="12" md="9">
                    <Input type="number" name="price" id="price" value={this.state.price}     onChange={this.onChange} rows="9"
                             required/>
                    </Col>
                  </FormGroup>

   

                  <FormGroup row>
                    <Col md="3">
                      <Label>Status</Label>
                    </Col>
                    <Col xs="12" md="9">
                    <Input type="select" name="status" value={this.state.status} onChange={this.onChange} id="status" required >
                        <option value="0">Please select</option>
                        <option value="New">New</option>
                        <option value="More than 5 years">More than 5 years</option>
                        <option value="Old">Old</option>
                      
                      </Input>
                    </Col>
                  </FormGroup>

                  <FormGroup row>
                    <Col md="3">
                      <Label>Disponibility</Label>
                    </Col>
                    <Col xs="12" md="9">
                    <Input type="select" name="disponibility" value={this.state.disponibility} onChange={this.onChange} id="disponibility" required >
                        <option value="0">Please select</option>
                        <option value="True">True</option>
                        <option value="False">False</option>
                      </Input>
                    </Col>
                  </FormGroup>
                  <Button color="success" block>Create Car</Button>

                </Form>
         
            </CardBody>


                </Card>
                </Col>

             
            

       </Row>
  </div>
  
      )
}

}


export default withRouter(CarCreate);







