import React, { Component } from 'react';
import { Layout, Row, Col } from 'antd';
const { Header } = Layout;

class Navbar extends Component {
  render() {
    const style = {
      navbar: {
        lineHeight: '64px',
        backgroundColor: '#202225',
        position: 'fixed',
        width: '100%',
        zIndex: 1
      },
      div: {
        marginBottom: '10px',
        textAlign: 'center'
      }
    };

    return (
      <Header style={style.navbar}>
        <Row type='flex' justify='space-between' align='middle'>
          <Col xs={24} sm={24} md={24} lg={24} xl={24} style={style.div}>
            <h1>Markdown Preview</h1>
          </Col>
        </Row>
      </Header>
    );
  }
}

export default Navbar;
