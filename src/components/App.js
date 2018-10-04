import React, { Component } from 'react';
import InputSection from './InputSection/InputSection';
import PreviewSection from './PreviewSection/PreviewSection';
import { Col, Row } from 'antd';

class App extends Component {
  render() {
    return (
      <Row>
        <Col span={12}>
          <InputSection />
        </Col>
        <Col span={12}>
          <PreviewSection />
        </Col>
      </Row>
    );
  }
}

export default App;
