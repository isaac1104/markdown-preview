import React, { Component } from 'react';
import { connect } from 'react-redux'

class PreviewSection extends Component {
  render() {
    return <div>{this.props.text}</div>
  }
};

function mapStateToProps({ text }) {
  return {
    text
  }
};

export default connect(mapStateToProps, null)(PreviewSection);
