import React, { Component } from "react";

class ErrorBoundary extends Component {

	constructor(props){

		super(props)

			this.state = {

				hasError: false,
			}

		}

	componentDidCatch(){

		this.setState({hasError:true})

	}

	render(){

		if(this.state.hasError){

			return <h3> Ooooops, a problem has occurred</h3>

			};

		return this.props.children
		};
}

export default ErrorBoundary;