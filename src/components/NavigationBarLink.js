import React, {Component} from 'react';

export default class NavigationBarLink extends Component {
  render() {
    return (
      <li className="nav-item">
        <a href={this.props.href} className="nav-link">{this.props.text}</a>
      </li>
    );
  }
}
