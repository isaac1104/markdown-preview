import React, { Component } from 'react';
import TextInput from './TextInput';
import { connect } from 'react-redux';
import { updateTextInput } from '../../actions';

class InputSection extends Component {
  handleChange(event) {
    this.props.updateTextInput(event.target.value);
  };

  render() {
    return <TextInput handleChange={this.handleChange.bind(this)} />
  }
};

export default connect(null, { updateTextInput })(InputSection);
