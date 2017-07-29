import React, {Component} from 'react';

class Services extends Component {
  render () {
    return (
      <div className="services-wrapper">
        <p>Services</p>
        <h1 className="title is-2">Our pledge to quality</h1>
        <p>We provide education support in countries where the infrastructure is not as established as elsewhere. We seize opportunities and stay strong, even when it gets difficult.</p>
        <h4>Our aims</h4>
        <div>
          <div>
            <p>To provide free education</p>
            <p>Empower people</p>
          </div>
          <div>
            <p>Help marginalised children</p>
            <p>Reduce barriers for girls</p>
          </div>
        </div>
        <div>
          <button>ALL SERVICES</button>
          <p>EXPLORE SERVICES</p>
        </div>
      </div>
    );
  }
}

export default Services;