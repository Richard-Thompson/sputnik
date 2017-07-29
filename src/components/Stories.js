import React, {Component} from 'react';
import '../css/Stories.css';

class Stories extends Component{
  render () {
    return (
        <div>
          <div className="hero-image">
            <p>Our Stories</p>
            <h1 className="title is-1">
              We provide childrens education in Central America
            </h1>
            <p> Our latest education and training event was held in Guatemala on April 12th</p>
            <button>FIND OUT MORE</button>
            <div>
              <div className="circle"/>
              <div className="circle"/>
              <div className="circle"/>
            </div>
          </div>
        </div>
    );
  }
}

export default Stories;