import Component from 'react-pure-render/component';
import Helmet from 'react-helmet';
import React, {PropTypes} from 'react';
import {FormattedHTMLMessage} from 'react-intl';
import {Link} from 'react-router';

export default class Page extends Component {

  static propTypes = {
    // Why not PropTypes.object.isRequired? Because:
    // https://github.com/rackt/react-router/issues/1505
    msg: PropTypes.object
  };

  render() {
    const {msg: {home: msg}} = this.props;

    return (
      <div className="home-page row">
        <Helmet title={msg.title} />
        <div className="tocheck small-12 column">
          {/* Note require usage for image source. Very useful for CDN. */}
          <img alt="50x50 placeholder" src={require('./50x50.png')} />
        </div>
      </div>
    );
  }

}
