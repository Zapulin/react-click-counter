import React from 'react';
import '../styles/Button.css';

class Button extends React.Component {
  render(){
    return (
      <button 
        className={ this.props.isClickBtn ? 'btn-click' : 'btn-reset' }
        onClick={this.props.clickController}>
        {this.props.text}
      </button>
    );
  }
}


export default Button;
