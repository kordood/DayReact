import React, { Component } from 'react';

class App extends Component {
	state = {
		count: 0,
	};
	
	handleChange = () => {
		this.setState({
			count: this.state.count + 1
		});
	};

	render() {
		return (
			<div className="App">
				<div className="props">
					{/* Props가 들어가는 부분입니다! */}
					<span>{this.props.message}</span>
				</div>

				<div className="state">
					{/* State가 들어가는 부분입니다! */}
					{this.state.count}
					<button onClick={this.handleChange}> Click Me ! </button>
				</div>
			</div>
		);
	}
}

export default App;
