import React, { Component } from 'react';
import { Input } from 'antd';
const { TextArea } = Input;

class TextInput extends Component {
  render() {
    const style = {
      textArea: {
        height: '100%',
        backgroundColor: '#f2f8ff'
      }
    };

    return (
      <TextArea
        onChange={this.props.handleChange}
        style={style.textArea}
        placeholder='Input Text Here'
      />
    )
  }
};

export default TextInput;
