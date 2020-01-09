import React, { Component } from 'react';
import { Badge, Card, CardBody, CardHeader, Col, Pagination, PaginationItem, PaginationLink, Button, Row, ButtonGroup, Table } from 'reactstrap';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import Route from 'react-router-dom/Route';
import axios from 'axios';
import { MDBDataTable } from "mdbreact";
import Moment from 'react-moment';
import { withRouter } from 'react-router-dom'
//import ProjectDetails from '../ProjectDetails/ProjectDetails';
import toast from 'toasted-notes'
import 'toasted-notes/src/styles.css';

class ListOptionServiceCar extends Component {

  constructor() {
    super()
    this.state = {
      posts: [{}]
    }
  }
  componentDidMount() {
    axios.get('http://localhost:4000/service/getOptionServiceVoitureById', {
      headers: { "idservice": this.props.match.params.idservice }
    }).then(res => {
      console.log('done', res.data.service)
      this.setState({
        posts: res.data.service.voitureOption
      });
      // console.log("posts ", this.state.posts)
    }).catch(e => {
      toast.notify("something went wrong please refresh ", {
        duration: 2000
      });
    });
  }



  gotoDetails() {
    this.props.history.push({
      // pathname:'/project/project-details',
      // state: {projectId:'this.state.ProjectId'}
    })
  }
  render() {
    //if (this.state.posts)
    //           return null 
    let data = {
      columns: [
        {
          label: "Name",
          field: "Name",
          sort: "asc",
          width: 10
        },
        {
          label: "Model",
          field: "Model",
          width: 50
        },
        {
          label: "Status",
          field: "Status",
          width: 50
        },
        {
          label: "Price",
          field: "Price",
          width: 50
        },
        {
          label: "Disponibility",
          field: "Disponibility",
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
    if (this.state.posts) {

      this.state.posts.map(service =>
        data.rows.push({
          Name: service.name,
          Model: service.model,
          Status: service.status,
          Price: service.price,
          Disponibility: service.disponibility,
          Actions: (
            <ButtonGroup aria-label="Basic example">
              <Link to={`/ListLocation/ListLocationCarService/details/CarDetails/${service._id}`} >
                <Button block outline color="primary" >Details</Button>
              </Link>

              {(() => {
                switch (service.disponibility) {
                  case 'True':
                    return <Link to={`/ListLocation/ListLocationCarService/details/CarReservation/${service._id}`} >
                      <Button block color="warning">Reservation</Button>
                    </Link>;
                  case 'False':
                    return <Link>
                      <Button block color="warning" disabled>Reservation</Button>
                    </Link>;
                  default:
                    return null;
                }
              })()}



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
                  <i className="fa fa-align-justify"></i> List of Cars
              <Col col="6" sm="4" md="2" xs className="mb-3 mb-xs-0">
                    <Link to={`/ListLocation/ListLocationCarService/details/CarCreate/${this.props.match.params.idservice}`}><Button block color="primary" className="btn-pill">New Car</Button></Link>

                  </Col>
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
  }
}

export default withRouter(ListOptionServiceCar);
