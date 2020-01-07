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





 
class CarDetails extends Component {
 
constructor(props)
{
  super(props)
  
  this.state= {
   car:{}
  
   }
 

}


componentDidMount(){
    axios.get("http://localhost:4000/VoitureOptionService/getCar",
    {
      headers: { idcar: this.props.match.params.idcar}}
    ).then(response => {


        this.setState({
            car:response.data.car

        })
        

        console.log("response   ",this.state.car)
    })
   

 
}

onChange=e=>
{
  this.setState({[e.target.name]:e.target.value})
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
            <Form  method="post" encType="multipart/form-data" className="form-horizontal" >
            <FormGroup row>
                    <Col md="3">
                      <Label>Name</Label>
                    </Col>
                    <Col xs="12" md="9">
                    <p className="form-control-static"> {this.state.car.name} </p>
                                         </Col>
                  </FormGroup>

                  <FormGroup row>
                    <Col md="3">
                      <Label>Model</Label>
                    </Col>
                    <Col xs="12" md="9">
                    <p className="form-control-static"> {this.state.car.model} </p>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label>Price/Day</Label>
                    </Col>
                    <Col xs="12" md="9">
                    <p className="form-control-static"> {this.state.car.price} $</p>
                    </Col>
                  </FormGroup>

   

                  <FormGroup row>
                    <Col md="3">
                      <Label>Status</Label>
                    </Col>
                    <Col xs="12" md="9">
                    <p className="form-control-static"> {this.state.car.status} </p>
                    </Col>
                  </FormGroup>

                  <FormGroup row>
                    <Col md="3">
                      <Label>Disponibility</Label>
                    </Col>
                    <Col xs="12" md="9">
                    <p className="form-control-static"> {this.state.car.disponibility} </p>
                    </Col>
                  </FormGroup>
                  

                </Form>
         
            </CardBody>


                </Card>
                </Col>

             
            

       </Row>
  </div>
  
      )
}

}


export default withRouter(CarDetails);







