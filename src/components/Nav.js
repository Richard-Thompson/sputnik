import React, {Component} from 'react';

import '../css/Nav.css';

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navDisplay:false
    }
    this.handleHamburgerDisplay = this.handleHamburgerDisplay.bind(this);
  }
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
              <div onClick={this.handleHamburgerDisplay}>
                <i className="hamburgerMenu fa fa-bars is large"></i>
              </div>
              <i className="fa fa-search is-large"></i>
              
            </div>
            {this.state.navDisplay ? 
              <div>
              <p className="column hamburgerTab">ABOUT US</p>
              <p className="column hamburgerTab" >OUR WORK</p>
              <p className="column hamburgerTab" >NEWS</p>
              <p className="column hamburgerTab">CAREER</p>
              <p className="column hamburgerTab">CONTACT US</p> </div> :
              null}
            
          </div>
        
      </nav>
    ) 
  }

  handleHamburgerDisplay () {
    this.setState({
      navDisplay: !this.state.navDisplay
    })
  }
}

export default Nav;