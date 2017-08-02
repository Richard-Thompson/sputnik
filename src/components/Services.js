import React, {Component} from 'react';
import '../css/Services.css';

class Services extends Component {
  render () {
    return (
      <div className="services-wrapper">
        <div className="services-content">
          <p>Services</p>
          <h1 className="services-title title is-2">Our pledge to quality</h1>
          <p className="services-main">We provide education support in countries where the infrastructure is not as established as elsewhere. We seize opportunities and stay strong, even when it gets difficult.</p>
          <h3 className="services-title title is-3">Our aims</h3>
          <div className="aims">
            <div>
              <p>To provide free education</p>
              <p>Empower people</p>
            </div>
            <div>
              <p>Help marginalised children</p>
              <p>Reduce barriers for girls</p>
            </div>
          </div>
          <div className="services-section">
            <button className="services-button">ALL SERVICES</button>
            <p>EXPLORE SERVICES</p>
          </div>
        </div>
        <div className="services-image">
          <img src="images/services.jpg"/>
        </div>
      </div>
    );
  }
}

export default Services;