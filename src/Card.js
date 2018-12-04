import React, { Component } from 'react';
import './Card.css';

class Card extends Component{
	render(){
    const imgStyle= {
        background: 'url('+ this.props.img+') no-repeat',
        backgroundSize: "100% 100%"
        }
		return(
			<div className ="demo-card-square mdl-card mdl-shadow--2dp">
  				<div className=" mdl-card__title mdl-card--expand" style={imgStyle}>
    				<h2 className="mdl-card__title-text">{this.props.title}</h2>
  				</div>
 				<div className="mdl-card__supporting-text">
    				{this.props.text}
  			</div>
  				<div className="mdl-card__actions mdl-card--border">
    				<a className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect" href={this.props.learn}
            target="_blank">

     				 	{this.props.more}
    				</a>
  				</div>
			</div>
			)
	}
}



export default 	Card;