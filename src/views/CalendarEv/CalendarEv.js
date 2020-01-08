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
    events: [
      {
        start: new Date(),
        end: new Date(moment().add(1, "days")),
        title: "Some title"
      }
    ]
  };

}







  


render() {
  

      return(
          

        <div className="animated fadeIn">
        <Row>
          <Col >
            <Card>
           
              <CardBody>
              <Calendar
                     localizer={localizer}
                       defaultDate={new Date()}
                      defaultView="month"
                       events={this.state.events}
                      style={{ height: "100vh" }}
                     />
                </CardBody>
                </Card>
                </Col>
                </Row>
          </div>
       
  
      );
}

}


export default withRouter(CalendarEv);







