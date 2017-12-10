import React, {Component} from 'react';
import Certificate from './Certificate';

export default class Certificates extends Component {

  render() {
    return (
    <div>
      <section className="bg-dark pb-3" id="certificates" >
        <div className="container text-light">
          <h1 className="display-3">Certificates</h1>
          <div className="m-2 py-2">
            <Certificate img="src/img/udemyLogo.png" text="Modern React with Redux" href="https://www.udemy.com/certificate/UC-C4GRKXHL/"/>
            <Certificate img="src/img/udemyLogo.png" text="Bootstrap 4 From Scratch With 5 Projects" href="https://www.udemy.com/certificate/UC-1F56TODI/"/>
          </div>
        </div>
      </section>
    </div>
    );
  }
}
