import React, { Component } from 'react';
import { Input } from 'antd';
import { connect } from 'react-redux';
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
        defaultValue={this.props.text}
      />
    )
  }
};

function mapStateToProps({ text }) {
  return {
    text
  }
};

export default connect(mapStateToProps, null)(TextInput);
