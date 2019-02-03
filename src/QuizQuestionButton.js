import React, { Component } from 'react';

class QuizQuestionButton extends Component {
    constructor(props, context){
        super(props, context);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(){
        this.props.clickHandler(this.props.button_text);
    }
    render() {
        return (
           <li><button onClick={this.handleClick}>{this.props.button_text}</button></li>
        )
    }
}

export default QuizQuestionButton