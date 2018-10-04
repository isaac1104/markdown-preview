import React, { Component } from 'react';
import { Col, Row } from 'antd';

class App extends Component {
  render() {
    return (
      <Row>
        <Col span={12}>
          <h1>Text Input</h1>
        </Col>
        <Col span={12}>
          <h1>Preview</h1>
        </Col>
      </Row>
    );
  }
}

export default App;
