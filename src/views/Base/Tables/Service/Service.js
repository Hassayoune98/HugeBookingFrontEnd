import React, { Component } from 'react';
import {  Card, CardBody, CardHeader, Col, Pagination, PaginationItem, PaginationLink, Row, Table } from 'reactstrap';
import axios from 'axios';
class Service extends Component {
  constructor(props) {
    super(props);
    this.state = {
      services: []
    };
  }

  componentDidMount() {
    axios.get('/api/service')
       .then(res => {
        this.setState({ services: res.data });
        console.log(this.state.services);
      });
  
  }
  render() {
    return (
      
      <div className="animated fadeIn">
      <p></p>
        <Row>
          <Col>
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify"></i> Combined All Service
              </CardHeader>
              <CardBody>
                <Table hover bordered striped responsive size="sm">
                  <thead>
                  <tr>
                    <th>Nom Service</th>
                    <th>Nom Responsable</th>
                    <th>Adresse</th>
                    <th>Numéro Téléphone</th>
                  </tr>
                  </thead>
                  <tbody>
                  {this.state.services.map(service=>
                <tr>
                  <td>{service.name}</td>
               <td>{}</td>
               <td>{service.address}</td>
               <td> {service.phoneNumber}</td>
               
               </tr>
               )}
               
                  </tbody>
                </Table>
                <nav>
                  <Pagination>
                    <PaginationItem><PaginationLink previous tag="button">Prev</PaginationLink></PaginationItem>
                    <PaginationItem active>
                      <PaginationLink tag="button">1</PaginationLink>
                    </PaginationItem>
                    <PaginationItem><PaginationLink tag="button">2</PaginationLink></PaginationItem>
                    <PaginationItem><PaginationLink tag="button">3</PaginationLink></PaginationItem>
                    <PaginationItem><PaginationLink tag="button">4</PaginationLink></PaginationItem>
                    <PaginationItem><PaginationLink next tag="button">Next</PaginationLink></PaginationItem>
                  </Pagination>
                </nav>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>

    );
  }
}

export default Service;
