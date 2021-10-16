import React, { Component } from "react";
import Clipboard from "react-clipboard.js";

class TextToCopy extends Component {
	constructor(props) {
		super(props);
		this.onSuccess = this.onSuccess.bind(this);
        this.state = { 
            text: this.props.children,
            successClass: ""
        };
	}

	onSuccess() {
		console.info("successfully copied");
        this.setState({ 
            text: "Copied!",
            successClass: "success"
        });
        setTimeout(() => {
            this.setState({
                text: this.props.children,
                successClass: "",
            });
        }, 1500);
	}

	render() {
		return (
			<Clipboard
				component="span"
				data-clipboard-text={this.props.clipboardText}
				button-title={this.props.btnTitle}
				onSuccess={this.onSuccess}
                className={`color-name ${this.state.successClass}`}
			>
				{this.state.text}
			</Clipboard>
		);
	}
}

export default TextToCopy
