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





 
class ServiceCreate extends Component {
 
constructor(props)
{
  super(props)
  
  this.state= {
    name:String,
    address: String,
    phoneNumber: String,
    typeService:Number,
  
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
   const service = {

       name: this.state.name,
       address: this.state.address,
       phoneNumber:this.state.phoneNumber,
       typeService: this.state.typeService,
     

  } 
 
  axios.post("http://localhost:4000/service/create",service)
  .then(
    this.props.history.push({
       pathname:`/ListLocation/ListLocationCarService`,
      
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
             service Create
            </CardHeader>
            <CardBody>
            <Form onSubmit={this.onSubmit} method="post" encType="multipart/form-data" className="form-horizontal" >
            <FormGroup row>
                    <Col md="3">
                      <Label>Service Name</Label>
                    </Col>
                    <Col xs="12" md="9">
                    <Input type="text" id="name" name="name" value={this.state.name}      onChange={this.onChange} placeholder="Text" required />
                                         </Col>
                  </FormGroup>

                  <FormGroup row>
                    <Col md="3">
                      <Label>Address</Label>
                    </Col>
                    <Col xs="12" md="9">
                    <Input type="text" name="address" id="address" value={this.state.address}     onChange={this.onChange} rows="9"
                             required/>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label>Phone Number</Label>
                    </Col>
                    <Col xs="12" md="9">
                    <Input type="text" name="phoneNumber" id="phoneNumber" value={this.state.phoneNumber}     onChange={this.onChange} rows="9"
                             required/>
                    </Col>
                  </FormGroup>

   

                  <FormGroup row>
                    <Col md="3">
                      <Label>Service Type</Label>
                    </Col>
                    <Col xs="12" md="9">
                    <Input type="select" name="typeService" value={this.state.typeService} onChange={this.onChange} id="typeService" required >
                        <option value="0">Please select</option>
                        <option value="Location Voiture">Location Voiture</option>
                        <option value="Agence de voyage">Agence de voyage</option>
                        <option value="Hotel">Hotel</option>
                      
                      </Input>
                    </Col>
                  </FormGroup>

                
                  <Button color="success" block>Create Service</Button>

                </Form>
         
            </CardBody>


                </Card>
                </Col>

             
            

       </Row>
  </div>
  
      )
}

}


export default withRouter(ServiceCreate);







