import React from 'react';
import LatestComic from "../../assets/comics/1.jpg";


class Comic extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			counter: 0,
			file: []
		}
	}

	render() {
		return(
			<div centered class="window" style={{width: "1000px"}}>
				<div className="title-bar">
					<div className="title-bar-text">A Web Comic</div>
					<div className="title-bar-controls">
						<button aria-label="Minimize"></button>
						<button aria-label="Maximize"></button>
						<button aria-label="Close"></button>
					</div>
				</div>
				<p>
					<img className={"App-logo"} src={LatestComic} alt="VTC internal design" />
				</p>
				<button>
					&lt; &lt; First
				</button>
				<button>
					&lt; Previous
				</button>
				<button>
					Random
				</button>
				<button>
					Next &gt;
				</button>
				<button>
					Newest &gt; &gt;
				</button>
			</div>

		)
	}
}
export default Comic;
