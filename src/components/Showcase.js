import React, { Component } from 'react';

export default class Showcase extends Component {
  render() {
    return (
      <div>
        <section id="showcase" >
        <div className="text-white">
          <div className="container" style={{'paddingTop': 80}}>
            <div className="row ">
              <div className="col-md-4 text-center p-3">
                <div className="d-flex flex-column row-hl">
                  <div>
                    <img src="src/img/kslusarczyk.jpg" className="img-fluid img-circle" alt="Cinque Terre"/>
                  </div>
                  <div className="p-4">
                    <button className="btn btn-primary p-1  fa-clickable" style={{backgroundColor: '#0077B5'}}><i className="fa fa-linkedin" aria-hidden="true" style={{color: '#white'}}></i></button>
                    <button className="btn btn-dark p-1  fa-clickable" style={{backgroundColor: '#333'}}><i className="fa fa-github" aria-hidden="true" style={{color: '#white'}}></i></button>
                  </div>
                </div>
              </div>
              <div className="col-md-8">
                <div className="d-flex flex-column" >
                  <div className="p-4 lead header-item">Krystyna Ślusarczyk</div>
                  <div className="p-4 lead header-item">.NET Software Developer</div>
                  <div className="p-4 lead header-item">Motabi Ltd.</div>
                  <div className="p-4 lead header-item"><i className="fa fa-envelope" aria-hidden="true"></i> slusarczyk.krystyna@gmail.com</div>
                </div>
              </div>
            </div>
          </div>
          <div className="container text-light" id="aboutMe">
            <div className="row">
              <div className="col">
                <h1 className="display-3">About me</h1>
                <p className="lead">I'm a passionate .NET software developer with strong focus on code quality. I'm familiar with object oriented programming and I'm aware
  of importance of good design. I never let my code to be messy or inelegant. Every day I'm trying to improve myself - by reading books,
  blogs, taking courses, creating personal projects and learing from people I work with. </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    );
  }
}
