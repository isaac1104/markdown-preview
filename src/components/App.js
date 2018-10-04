import React, { Component } from 'react';
import InputSection from './InputSection/InputSection';
import PreviewSection from './PreviewSection/PreviewSection';
import { Col, Row } from 'antd';

class App extends Component {
  render() {
    const style = {
      container: {
        height: '100vh'
      },
      inputSection: {
        height: '100%'
      },
      PreviewSection: {
        height: '100%',
        backgroundColor: '#eeeeee',
        borderLeft: '#2f3136 solid 2px'
      }
    };

    return (
      <Row style={style.container}>
        <Col span={12} style={style.inputSection}>
          <InputSection />
        </Col>
        <Col span={12} style={style.PreviewSection}>
          <PreviewSection />
        </Col>
      </Row>
    );
  }
}

export default App;
