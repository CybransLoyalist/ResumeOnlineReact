import React, {Component} from 'react';
import NavigationBar from './NavigationBar';
import Showcase from './Showcase';

export default class Resume extends Component {
  render() {
    return (
      <div>
        <NavigationBar/>
        <Showcase/>
      </div>
    );
  }
}
