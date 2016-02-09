import Component from 'react-pure-render/component';
import React, {PropTypes} from 'react';
import {Link} from 'react-router';

export default class Header extends Component {

  static propTypes = {
    msg: PropTypes.object.isRequired,
    pathname: PropTypes.string.isRequired,
    viewer: PropTypes.object
  };

  render() {
    const {msg: {app: {links: msg}}, viewer} = this.props;

    return (
      <header className="row align-middle">
        <h1 className="shrink column">
          <Link to="/">{msg.home}</Link>
        </h1>
        <nav className="column">
          <ul className="menu">
            <li><Link activeClassName="active" to="/todos">{msg.todos}</Link></li>
            <li><Link activeClassName="active" to="/account">{msg.account}</Link></li>
            {!viewer &&
              <li><Link activeClassName="active" to="/sign_in">{msg.login}</Link></li>
            }
          </ul>
        </nav>
      </header>
    );
  }

}
