import React, {Component} from 'react'

export default class Joke extends Component{
    constructor(props) {
        super(props)
        this.state = {
            joke: null
        }
    }
    getJoke = async () => {
        let res = await fetch("https://icanhazdadjoke.com", {
            headers: {
                "Accept": "application/json"
            }
        })
        let joke = await res.json()
        this.setState({joke: joke.joke})
    }

    render(){
        return(
            <>
                <h1>{this.state.joke}</h1>
                <button onClick={this.getJoke}>Get Joke</button>
            </>
            
        )
    }
}