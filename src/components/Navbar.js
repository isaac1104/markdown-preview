import React, { Component } from 'react';
import { Layout, Divider, Icon } from 'antd';
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
        Live Markdown Preview by Isaac Kwon
        <Divider type='vertical' />
        <a href='https://github.com/isaac1104'>
          <Icon type='github' />
        </a>
        <Divider type='vertical' />
        <a href='https://www.linkedin.com/in/isaac-kwon/'>
          <Icon type='linkedin' />
        </a>
      </Header>
    );
  }
}

export default Navbar;
