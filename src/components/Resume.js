import React, {Component} from 'react';
import NavigationBar from './NavigationBar';
import Showcase from './Showcase';
import ExperienceAndEducation from './ExperienceAndEducation';
import Skills from './Skills';

export default class Resume extends Component {
  render() {
    return (
      <div>
        <NavigationBar/>
        <Showcase/>
        <ExperienceAndEducation/>
        <Skills/>
      </div>
    );
  }
}
