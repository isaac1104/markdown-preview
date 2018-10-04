import React, { Component } from 'react';
import { Input } from 'antd';
const { TextArea } = Input;

class TextInput extends Component {
  render() {
    const style = {
      textArea: {
        height: '90vh'
      }
    };

    return <TextArea style={style.textArea} />
  }
};

export default TextInput;
