import React, {Component} from 'react';
import Nav from './Nav';
import Services from './Services';
import Stories from './Stories';

import '../css/index.css';

class App extends Component {
  render () {
    return (
      <div>
        <Nav />
        <Services />
        <Stories />
      </div>
    );
  }
}

export default App;