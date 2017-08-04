import React, {Component} from 'react';

import '../css/Nav.css';

class Nav extends Component {
  constructor (props) {
    super(props);
    this.state = {
      navDisplay:false,
      searchDisplay:false
    };
    this.handleHamburgerDisplay = this.handleHamburgerDisplay.bind(this);
    this.handleSearchDisplay = this.handleSearchDisplay.bind(this);
  }
  render () {
    return (
      <div>
      <nav className="columns">
          <div className="column is-4 logo">
            <h1 className="title is-3">SPUTNIK</h1>
          </div>
          <div className="column is-9.5 main">
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
              <div className="search-wrapper">
                <input className={this.state.searchDisplay ? 'search-out search-box' : 'search-in search-box'}></input>
                <i onClick={this.handleSearchDisplay} className=" fa fa-search is-large"></i>
              </div>
            </div>
                    
          </div>
       
      </nav>
        {this.state.searchDisplay ?
              <div className="search-wrapper-mobile">
                <input className={this.state.searchDisplay ? 'search-out' : 'search-in'}></input> 
              </div> :
              null }
       {this.state.navDisplay ? 
              <div>
              <p className="column hamburgerTab">ABOUT US</p>
              <p className="column hamburgerTab" >OUR WORK</p>
              <p className="column hamburgerTab" >NEWS</p>
              <p className="column hamburgerTab">CAREER</p>
              <p className="column hamburgerTab">CONTACT US</p> </div> :
              null}
      </div>
    ); 
  }

  handleSearchDisplay () {
    this.setState({
      searchDisplay: !this.state.searchDisplay
    });
  }

  handleHamburgerDisplay () {
    this.setState({
      navDisplay: !this.state.navDisplay
    });
  }
}

export default Nav;