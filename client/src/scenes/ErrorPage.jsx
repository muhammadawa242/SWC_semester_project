// see if works

// ErrorPage.jsx;
import React, { Component } from "react";

class ErrorPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			hasError: false,
		};
	}

	componentDidCatch(error, errorInfo) {
		console.error("Error caught by ErrorBoundary:", error, errorInfo);
		this.setState({ hasError: true });
	}

	render() {
		if (this.state.hasError) {
			return (
				<div>
					<h1>Something went wrong!</h1>
					<p>
						We apologize for the inconvenience. Please try
						again later.
					</p>
				</div>
			);
		}

		return this.props.children;
	}
}

export default ErrorPage;
