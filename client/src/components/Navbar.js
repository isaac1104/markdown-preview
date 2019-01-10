import React, { Component } from 'react';
import { Layout } from 'antd';
const { Header } = Layout;

class Navbar extends Component {
  render() {
    const style = {
      navbar: {
        lineHeight: '64px',
        backgroundColor: '#202225',
        position: 'fixed',
        width: '100%',
        zIndex: 1,
        marginBottom: '10px',
        textAlign: 'center',
        color: '#ffffff'
      },
    };

    return (
      <Header style={style.navbar}>
        <h1>Live Markdown Preview</h1>
      </Header>
    );
  }
}

export default Navbar;
