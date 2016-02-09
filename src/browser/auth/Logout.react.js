import Component from 'react-pure-render/component';
import React, {PropTypes} from 'react';

export default class Logout extends Component {

  static propTypes = {
    className: PropTypes.string,
    msg: PropTypes.object.isRequired
  };

  constructor(props) {
    super(props);
    this.logout = this.logout.bind(this);
    if (typeof this.props['className'] === 'undefined') {
      this.className = 'primary';
    } else {
      this.className = this.props.className;
    }
    this.className += ' button';
  }

  logout() {
    // Always reload app on logout for security reasons.
    location.href = '/';
  }

  render() {
    const {msg} = this.props;
    return (
      <button className={this.className} onClick={this.logout}>{msg.button}</button>
    );
  }

}
