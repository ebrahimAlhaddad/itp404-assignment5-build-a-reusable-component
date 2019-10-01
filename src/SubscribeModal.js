import React from 'react';

export default class SubscribeModal extends React.Component {

	constructor(props){
		super(props);
		this.state = {
			active:this.props.active,
			email:''
		};
	}

	handleCloseBtn = (event) => {
		this.setState({active:false});
	}

	handleSubBtn = (event) => {
		this.setState({active:true});
	}
	
	handleInput = (event) => {
    this.setState({
      email: event.target.value
    });
  }
render(){
		
		const {active,email} = this.state;
		const {children, onSubmit} = this.props;
		if(active){
			return (
				<div className='modal-wrapper'>
					<div id="close-btn">
					<button onClick={this.handleCloseBtn}> Close </button>
					</div>
					<form onSubmit={onSubmit.bind(this,email)}>
				 		{
				 			(typeof children === 'function') ?
				 			children() : ''
				 		}
				 	<input 
				 		type="email"
				 		value={email}
				 		onChange={this.handleInput}
				 	/>
				 	<button type="submit">Subscribe!</button>
				 	</form>
				 </div>
			);
		} else {
			return(
				<button onClick={this.handleSubBtn}> Subscribe! </button>
			);
		}

		
	}
}



