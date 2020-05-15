import React from 'react';

class Comic extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			counter: 1,
			file: [],
			comic: "./assets/comics/1.png",
			string: ""
		};
		// This binding is necessary to make `this` work in the callback
		this.firstButton = this.firstButton.bind(this);
		this.backButton = this.backButton.bind(this);
		this.randomButton = this.randomButton.bind(this);
		this.nextButton = this.nextButton.bind(this);
		this.newestButton = this.newestButton.bind(this);
	}

	firstButton(props) {
		const comicString = "./assets/comics/1.png";
		this.setState({counter: 1});
		this.setState({comic: comicString});
	}
	backButton(props) {
		this.setState({counter: this.state.counter - 1}, () => {
			const comicString = "./assets/comics/" + this.state.counter + ".png";
			this.setState({comic: comicString});
		});
	}
	randomButton(props) {
		const min = 1;
		const max = 5;
		const rand = Math.round(min + Math.random() * (max - min));
		this.setState({counter: rand});
		const comicString = "./assets/comics/" + this.state.counter + ".png";
		this.setState({comic: comicString});

	}
	nextButton(props) {
		this.setState({counter: this.state.counter + 1}, () => {
			const comicString = "./assets/comics/" + this.state.counter + ".png";
			this.setState({comic: comicString});
		});


	}
	newestButton(props) {
		this.setState({counter: 5}, () => {
			const comicString = "./assets/comics/5.png";
			this.setState({comic: comicString});
		});

	}

	render() {
		return(
			<div>
				<div className="window">
					<div className="title-bar">
						<div className="title-bar-text">A Web Comic</div>
						<div className="title-bar-controls">
							<button aria-label="Minimize"></button>
							<button aria-label="Maximize"></button>
							<button aria-label="Close"></button>
						</div>
					</div>
					<p>
						<img className={"App-logo"} src={this.state.comic} alt="Current comic" />
					</p>
					<h4>{this.state.counter}</h4>
					<button onClick={this.firstButton}>
						&lt; &lt; First
					</button>
					<button onClick={this.backButton}>
						&lt; Previous
					</button>
					<button onClick={this.randomButton}>
						Random
					</button>
					<button onClick={this.nextButton}>
						Next &gt;
					</button>
					<button onClick={this.newestButton}>
						Newest &gt; &gt;
					</button>
				</div>
			</div>

		)
	}
}
export default Comic;
