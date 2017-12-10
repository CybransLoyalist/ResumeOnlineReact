import React, { Component } from 'react';

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
            <li className="nav-item">
              <a href="#home" className="nav-link">Home</a>
            </li>
            <li className="nav-item">
              <a href="#explore-head-section" className="nav-link">Explore</a>
            </li>
            <li className="nav-item">
              <a href="#create-head-section" className="nav-link">Create</a>
            </li>
            <li className="nav-item">
              <a href="#share-head-section" className="nav-link">Share</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    </div>
    );
  }
}
