import Component from 'react-pure-render/component';
import React, {PropTypes} from 'react';
import {FormattedHTMLMessage} from 'react-intl';

export default class Footer extends Component {

  static propTypes = {
    msg: PropTypes.object.isRequired
  };

  render() {
    const {msg} = this.props;

    return (
      <footer className="row">
        <p className="small-12 column">
          <FormattedHTMLMessage defaultMessage={msg.madeByHtml} />
        </p>
      </footer>
    );
  }

}
