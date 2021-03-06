import React, { Component } from 'react';
import { Card, CardBody, CardColumns, CardHeader } from 'reactstrap';

class ClientMessage extends Component {
  render() {
    const message = this.props.message;
    return (
      <div className="animated fadeIn">
        <Card style={{ margin: 3 }} className="text-white bg-success text-center">
          <CardBody style={{ textAlign: 'left', padding: 5, margin: 0 }}>
            {message}  
          </CardBody>
        </Card>
      </div>
    );
  }
}


export default ClientMessage;
