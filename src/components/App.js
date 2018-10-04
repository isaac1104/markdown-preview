import React, { Component } from 'react';
import InputSection from './InputSection/InputSection';
import PreviewSection from './PreviewSection/PreviewSection';
import Navbar from './Navbar';
import FooterNav from './FooterNav';
import { Col, Row, Layout } from 'antd';
const { Content } = Layout;

class App extends Component {
  render() {
    const style = {
      layout: {
        padding: '0 24px',
        alignItems: 'center',
        marginTop: '50px'
      },
      content: {
        padding: 24,
        margin: 0,
        height: '90vh',
        width: '100vw'
      },
      container: {
        height: '100%'
      },
      inputSection: {
        height: '100%'
      },
      PreviewSection: {
        height: '100%',
        backgroundColor: '#36393f',
        overflow: 'scroll'
      }
    };

    return (
      <Layout>
        <Navbar />
        <Layout style={style.layout}>
          <Content style={style.content}>
            <Row gutter={16} style={style.container}>
              <Col span={12} style={style.inputSection}>
                <InputSection />
              </Col>
              <Col span={12} style={style.PreviewSection}>
                <PreviewSection />
              </Col>
            </Row>
          </Content>
        </Layout>
        <FooterNav />
      </Layout>
    );
  }
}

export default App;
