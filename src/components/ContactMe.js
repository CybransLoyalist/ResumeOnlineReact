import React, {Component} from 'react';


export default class ContactMe extends Component {

  render() {
    return (
    <div>
      <section id="contactMe" >
      <div className="container text-light">
        <h1 className="display-3">Contact me</h1>
        <div className="contactBox p-3">
          <form>
            <div className="form-group">
              <label for="name">Name</label>
              <input type="text" class="form-control"/>
            </div>
            <div className="form-group">
              <label for="email">Email</label>
              <input type="email" class="form-control"/>
            </div>
            <div className="form-group">
              <label for="message">Message</label>
              <textarea className="form-control"></textarea>
            </div>
            <button className="btn btn-dark btn-block">
            Send
          </button>
          </form>
          </div>
        </div>
    </section>
    </div>
    );
  }
}
