import React from "react";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

class Weather extends React.Component {
    render() {
        console.log(this.props.weather);
      return (
        <Card style={{ width: '18rem' }}>
          <ListGroup variant="flush">
            <ListGroup.Item>{this.props.date}</ListGroup.Item>
            <ListGroup.Item>{this.props.description}</ListGroup.Item>
          </ListGroup>
        </Card>
      );
    }
  }
  export default Weather;