import React, { Component } from 'react';
import { Badge, Card, CardBody, CardHeader, Col, Pagination, PaginationItem, PaginationLink,Button, Row,ButtonGroup, Table} from 'reactstrap';
import {BrowserRouter as Router, Link} from 'react-router-dom';
import Route from 'react-router-dom/Route';
import axios from 'axios';
import { MDBDataTable } from "mdbreact";
import Moment from 'react-moment';
import {withRouter} from 'react-router-dom'
//import ProjectDetails from '../ProjectDetails/ProjectDetails';
import toast from 'toasted-notes' 
import 'toasted-notes/src/styles.css';
class ListLocationCarService extends Component {

  constructor()
  {
    super()
    this.state= {
    posts: [{}]
  }
}
    componentDidMount()
  {
      axios.get('http://localhost:4000/service/getServiceByType',{
      headers: {"type":"Location Voiture"} 
  }).then(res => {
      console.log('done',res)
      this.setState({
       posts: res.data.services
      });
      console.log("posts ", this.state.posts)
    }).catch(e => {
      toast.notify("something went wrong please refresh ", {
        duration: 2000
      });
    });
  }




render() {
   //if (this.state.posts)
   //           return null 
    let data = {
          columns: [
            {
              label: "Service Name  ",
              field: "ServiceName",
              sort: "asc",
              width: 10
            },
            {
              label: "Address",
              field: "Address",
              width: 50
            } ,
             {
              label: "Phone Number",
              field: "PhoneNumber",
              width: 50
            },
            {
              label: "Actions",
              field: "Actions",
              width: 100
            }
           
          ] /**/,
          rows: [{}]
        };
        if (this.state.posts) 
          {
      
            this.state.posts.map(service => 
              data.rows.push({
                ServiceName: service.name,
                Address: service.address,
                PhoneNumber: service.phoneNumber, 
             Actions: (
              <ButtonGroup aria-label="Basic example">
             <Link to={`/ListLocation/ListLocationCarService/details/${service._id}`}>
                 <Button block outline color="primary" >Details </Button>
             </Link>     
             </ButtonGroup>
             )
              })
            );
          }
     return (
      <div className="animated fadeIn">
      <Row>
        <Col >
          <Card>
            <CardHeader>
              <Route>
              <i className="fa fa-align-justify"></i> Location Car Table
             
            </Route>
         
            </CardHeader>
            <CardBody>
    
              <MDBDataTable bordered hover data={data} />
              </CardBody>
              </Card>
              </Col>
              </Row>
    
        </div>
    )
}}

export default withRouter(ListLocationCarService);
