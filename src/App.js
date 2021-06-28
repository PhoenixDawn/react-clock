import React, {Component} from 'react';
import Joke from "./Joke"
import Clock from "./Clock";

class App extends Component {
    constructor(props){
        super(props)
        this.state = {latitude: null, longitude: null, error: null, date:new Date()}

    }

		componentDidMount(){
			window.navigator.geolocation.getCurrentPosition(
				position => this.setState({latitude: position.coords.latitude, longitude: position.coords.longitude}),
				error => this.setState({error: error.message})
			)
			this.timerId = setInterval(() => {
				this.setState({date: new Date()})
			}, 1000);
		}

		componentWillUnmount() {
			clearInterval(this.timerId)
		}

		componentDidUpdate(){
			console.log("App Updated")
		}
    
  render(){  
    return (
      <div>
      	{this.state.error ? (
        	<p style={{color: "red"}}>{this.state.error}</p>
        ) 
        : 
        (
        	<>
          	{this.state.latitude &&
            	<>
              	<h4>Latitude: { this.state.latitude }</h4>
                <h4>Longitude: { this.state.longitude }</h4>
              </>
            }
    			  <Clock icon="sun.svg" timezone={"Sydney/Australia"} date={this.state.date} />
						<Joke/>
      		</>
        )
        }

        </div>
    );
	}
}

export default App;
