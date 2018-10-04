import React, { Component } from 'react';
import marked from 'marked';
import { connect } from 'react-redux';

class PreviewSection extends Component {
  getMarkdownText() {
    const rawMarkup = marked(this.props.text, { sanitize: true });
    return {
      __html: rawMarkup
    };
  };

  render() {
    return <div dangerouslySetInnerHTML={this.getMarkdownText()} style={{ color: '#ffffff' }} />
  }
};

function mapStateToProps({ text }) {
  return {
    text
  }
};

export default connect(mapStateToProps, null)(PreviewSection);
