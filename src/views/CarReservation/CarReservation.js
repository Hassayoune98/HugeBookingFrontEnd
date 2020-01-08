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





 
class CarReservation extends Component {
 
constructor(props)
{
  super(props)
  
  this.state= {

    dateFinReservation:Date,
    dateDebutReservation:Date
   
  
   }

   this.onSubmit = this.onSubmit.bind(this)
   this.onChange = this.onChange.bind(this)

}

onChange=e=>
{
  
  this.setState({[e.target.name]:e.target.value})
  console.log(this.state.dateFinReservation)

}


onSubmit(e)
{
  e.preventDefault();
  console.log("STATE ::: ",this.state)
   const reservation = {

    dateFinReservation:this.state.dateFinReservation,
    dateDebutReservation:this.state.dateDebutReservation
     

  } 

  console.log("hello")
 
  axios.post("http://localhost:4000/ReservationService/create",reservation,
  {
    headers: { idvoiture: this.props.match.params.idcar}}
  ).then(
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
             Car Reservation
            </CardHeader>
            <CardBody>
            <Form onSubmit={this.onSubmit} method="post" encType="multipart/form-data" className="form-horizontal" >
            <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="date-input">Date Start Resrvation </Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="date" id="dateDebutReservation"  name="dateDebutReservation"  value={this.state.dateDebutReservation}      onChange={this.onChange}placeholder="date" />
                    </Col>
                  </FormGroup>

                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="date-input">Date End Resrvation </Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="date" id="dateFinReservation" value={this.state.dateFinReservation}      onChange={this.onChange} name="dateFinReservation" placeholder="date" />
                    </Col>
                  </FormGroup>
                  <Button color="success" block>Reserve Car</Button>
                </Form>
         
            </CardBody>


                </Card>
                </Col>

             
            

       </Row>
  </div>
  
      )
}

}


export default withRouter(CarReservation);







