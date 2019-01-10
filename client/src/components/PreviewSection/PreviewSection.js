import React, { Component } from 'react';
import marked from 'marked';
import { connect } from 'react-redux';

class PreviewSection extends Component {
  getMarkdownText() {
    const rawMarkup = marked(this.props.text, { sanitize: true, breaks: true });
    return {
      __html: rawMarkup
    };
  };

  render() {
    const style = {
      container: {
        color: '#ffffff',
        margin: '10px 0 0 0'
      }
    };

    return <div dangerouslySetInnerHTML={this.getMarkdownText()} style={style.container} />
  }
};

function mapStateToProps({ text }) {
  return {
    text
  }
};

export default connect(mapStateToProps, null)(PreviewSection);
