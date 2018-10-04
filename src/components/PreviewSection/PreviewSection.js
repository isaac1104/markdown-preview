import React, { Component } from 'react';
import { connect } from 'react-redux'

class PreviewSection extends Component {
  render() {
    return <p>{this.props.text}</p>
  }
};

function mapStateToProps({ text }) {
  return {
    text
  }
};

export default connect(mapStateToProps, null)(PreviewSection);
