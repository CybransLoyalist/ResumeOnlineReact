import React, { Component } from 'react';
import NavigationBarLink from './NavigationBarLink';

export default class NavigationBar extends Component {
  render() {
    return (
      <div>
      <nav className="navbar navbar-expand-sm bg-dark navbar-dark fixed-top">
      <div className="container">
        <a href="index.html" className="navbar-brand">Krystyna Ślusarczyk</a>
        <button className="navbar-toggler" data-toggle="collapse" data-target="#topNavbar">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="topNavbar">
          <ul className="navbar-nav ml-auto">
            <NavigationBarLink href="#aboutMe" text="About me"/>
            <NavigationBarLink href="#experienceAndEducation" text="Experience & Education"/>
            <NavigationBarLink href="#skills" text="Skills"/>
            <NavigationBarLink href="#contactMe" text="Contact me"/>
          </ul>
        </div>
      </div>
    </nav>
    </div>
    );
  }
}
