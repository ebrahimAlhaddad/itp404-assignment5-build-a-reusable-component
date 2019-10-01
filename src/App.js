import React from 'react';
import './App.css';
import SubscribeModal from './SubscribeModal'

export default class App extends React.Component{
 
  constructor(){
    super();
    this.state = {
      entered_email: ''
    };
  }
  
  handleSubmit = (email, event) => {
    event.preventDefault();
    this.setState({entered_email:email});
}
  render(){
    return (
      <div>
        <h4> Input email is available inside onSubmit function: </h4>
        <p> {this.state.entered_email}</p>
        <SubscribeModal active={true} onSubmit={this.handleSubmit}>
        {
          () => {
            return(
              <div>
                <h4>This is a test demo!</h4>
                <p>The SubscribeModal Component is designed to provide
                  an easy to implement form. Two props are required:
                  Active decitates whether the form is initially active. 
                  This content must also be passed to fill up the form's body.
                  A function can be passed to do stuff upon entering and submitting an email.
                  </p>
                <p> When inactive, the modal can be activated by clicking a button</p>
              </div>
              );
          }
        }
        </SubscribeModal>
      </div>

    );
  }
  
}

