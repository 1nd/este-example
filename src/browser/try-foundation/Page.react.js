import Component from 'react-pure-render/component'
import React, {PropTypes} from 'react'
import Helmet from 'react-helmet'

export default class Page extends Component {
  static propTypes = {
    msg: PropTypes.object
  };

  render() {
    const {msg: {"try-foundation": msg}} = this.props

    return (
      <div className="try-foundation-page">
        <Helmet title={msg.title} />
        <div>Try to use Foundation for Sites ver. 6 with Este</div>
        <button className="primary button" type="button">Ini contoh tombol</button>
      </div>
    )
  }
}
