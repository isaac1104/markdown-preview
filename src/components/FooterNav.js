import React from 'react';
import { Divider, Icon, Layout } from 'antd';
const { Footer } = Layout;

const FooterNav = () => {
  const style = {
    position: 'fixed',
    bottom: 0,
    width: '100%',
    textAlign: 'center',
    backgroundColor: '#202225',
    color: '#fff'
  };

  return (
    <Footer style={style}>
      Live Markdown Preview ©2018 by Isaac Kwon
      <Divider type='vertical' />
      <a href='https://github.com/isaac1104'>
        <Icon type='github' />
      </a>
      <Divider type='vertical' />
      <a href='https://www.linkedin.com/in/isaac-kwon/'>
        <Icon type='linkedin' />
      </a>
    </Footer>
  );
}

export default FooterNav;
