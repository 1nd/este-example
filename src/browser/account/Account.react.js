import AuthLogout from '../auth/Logout.react';
import Component from 'react-pure-render/component';
import Helmet from 'react-helmet';
import React, {PropTypes} from 'react';
import RouterHandler from '../components/RouterHandler.react';
import {FormattedMessage} from 'react-intl';

export default class Account extends Component {

  static propTypes = {
    children: PropTypes.object,
    msg: PropTypes.object,
    users: PropTypes.object
  };

  render() {
    const {children, msg, users: {viewer: {email}}} = this.props;

    return (
      <div className="account-page">
        <Helmet title={msg.account.title} />
        {
        children
        ? <RouterHandler {...this.props} />
        : <p>
            <FormattedMessage
              defaultMessage={msg.account.welcome}
              id={'msg.account.welcome'}
              values={{email}}
            />
          </p>
        }
        <AuthLogout msg={msg.auth.logout} />
      </div>
    );
  }

}
