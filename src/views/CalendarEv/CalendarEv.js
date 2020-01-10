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

import {
    Calendar,
    momentLocalizer,
  } from 'react-big-calendar';
import moment from "moment";

import "react-big-calendar/lib/css/react-big-calendar.css";



const localizer = momentLocalizer(moment)
 
class CalendarEv extends Component {
 
constructor(props)
{
  super(props)
  
  this.state = {

    reservations: [{}],
    datarecieved: false,
    events: [
      {
      }
    ]
  };

}

componentDidMount(){
  axios.get("http://localhost:4000/ReservationService/getReservations").then(e => {
   
  this.setState({
    reservations:e.data.reservation
  })

 this.state.reservations.map(e => {
   
   let reservation = {
    start:new Date(e.reservation.dateDebutReservation),
    end: new Date (e.reservation.dateFinReservation),
    title: e.model + e.name
   }
  
   this.state.events.push(reservation)
   
   this.setState({
    datarecieved:true
   }) });

   console.log("state")

    console.log("state events", this.state.events)
    console.log("response ", this.state.reservations)
    })

  
}





  


render() {
  

      return(
          

        <div className="animated fadeIn">
        <Row>
          <Col >
            <Card>
           
              <CardBody>
          

              {this.state.datarecieved ?
                <Calendar
                     localizer={localizer}
                       defaultDate={new Date()}
                       defaultView="month"
                       events={this.state.events}
                      style={{ height: "100vh" }}
              /> :  <Calendar
              localizer={localizer}
                defaultDate={new Date()}
                defaultView="month"
                events={this.state.events}
               style={{ height: "100vh" }}
       />
              }

                </CardBody> 

                </Card>
                </Col>
                </Row>
          </div>
       
  
      );
}

}


export default withRouter(CalendarEv);







