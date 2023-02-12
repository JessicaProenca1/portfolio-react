import React, { Component } from 'react';

class Buttons extends Component {
  render() {
    const { label, onClick, type, moreClasses, name } = this.props;
    return (
      <button
        className={ `button ${moreClasses}` }
        type={ type }
        name={ name }
        onClick={ onClick }
      >
        { label }
      </button>
    );
  }
}

export default Buttons;