import React, { Component } from 'react';
import { Card, CardBody, CardHeader, CardFooter, Col, FormText, Input, Row, Form, FormGroup, Label, Badge } from 'reactstrap';
import { mapToCssModules } from 'reactstrap/lib/utils';
import Widget02 from '../Widgets/Widget02';
import { Bar, Doughnut, Line, Pie, Polar, Radar } from 'react-chartjs-2';
import axios from 'axios';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom'
import {
    Button, ButtonGroup, Table
} from 'reactstrap';
import Moment from 'react-moment';
//import Modal from 'react-bootstrap/Modal';

class RoomDetails extends Component {
    constructor(props) {
        super(props)

        this.state = {
            room: {}

        }


    }

    componentDidMount() {
        axios.get("http://localhost:4000/chambreOptionService/getRoom",
            {
                headers: { idroom: this.props.match.params.idroom }
            }
        ).then(response => {


            this.setState({
                room: response.data.room

            })


            console.log("response   ", this.state.room)
        })



    }

    onChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    render() {
        return (
            <div className="animated fadeIn">
                <Row>
                    <Col xs="12" sm="6" lg="12">
                        <Card>
                            <CardHeader>
                                {this.state.room.name} Details
                     </CardHeader>
                            <CardBody>
                                <Form method="post" encType="multipart/form-data" className="form-horizontal" >
                                    <FormGroup row>
                                        <Col md="3">
                                            <Label>Name</Label>
                                        </Col>
                                        <Col xs="12" md="9">
                                            <p className="form-control-static"> {this.state.room.name} </p>
                                        </Col>
                                    </FormGroup>

                                    <FormGroup row>
                                        <Col md="3">
                                            <Label>Price/Day</Label>
                                        </Col>
                                        <Col xs="12" md="9">
                                            <p className="form-control-static"> {this.state.room.price} </p>
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Col md="3">
                                            <Label>Type Room</Label>
                                        </Col>
                                        <Col xs="12" md="9">
                                            <p className="form-control-static"> {this.state.room.typeChambre} </p>
                                        </Col>
                                    </FormGroup>

                                    <FormGroup row>
                                        <Col md="3">
                                            <Label>Disponibility</Label>
                                        </Col>
                                        <Col xs="12" md="9">
                                            <p className="form-control-static"> {this.state.room.disponibility} </p>
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

export default withRouter(RoomDetails);