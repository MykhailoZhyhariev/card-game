import React, { Component } from 'react';
import './Card.css';

class Card extends Component {
  constructor(props) {
    super(props);

    this.state = {
      
    }
  }

  render() {
    const { image, alt } = this.props;

    return (
      <img src={image} className="card" alt={alt} />
    );
  }
}

export default Card;
