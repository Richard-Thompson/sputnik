import React, {Component} from 'react';

import '../css/Nav.css';

class Nav extends Component {
  render () {
    return (
      <nav className="columns">
          <div className="column is-4 logo">
            <h1 className="title is-3">SPUTNIK</h1>
          </div>
          <div className="column is-8 main">
            <div className="language">
              <p>ENG</p>
              <p>DEU</p>
            </div>
            <div className="columns tabs">
              <p className="column tab">ABOUT US</p>
              <p className="column tab" >OUR WORK</p>
              <p className="column tab" >NEWS</p>
              <p className="column tab">CAREER</p>
              <p className="column tab">CONTACT US</p>
              <i className="fa fa-search is-large"></i>
            </div>
            
          </div>
        
      </nav>
    ) 
  }
}

export default Nav;