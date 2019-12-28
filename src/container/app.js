import React, { Component } from "react";
import SearchBox from "../components/SearchBox";
import CardList from "../components/CardList";
/*import { robots } from "./robot";*/
import ErrorBoundary from "../components/ErrorBoundary"
import "./app.css";
import Scroll from "../components/Scroll";
const USER_SERVICE_URL = 'https://jsonplaceholder.typicode.com/users';

class App extends Component  {

constructor(){

	super()
	this.state = {
		robots : [],
		searchfield : ""
		}
	}

onSearchChange = (event) => {

		this.setState({searchfield : event.target.value})
	
		}

	componentDidMount(){ 

		fetch(USER_SERVICE_URL)
		.then(response => response.json())
		.then(result => this.setState({robots:result}))
 
	}
	
	render(){

	const { robots, searchfield } = this.state;

		if(robots.length===0){

			return <h3>loading...</h3>

		}else {
				
				const filteredRobots = robots.filter(robot => {
				return robot.name.toLowerCase().includes(searchfield.toLowerCase());
			
			});
					
		return (
			<div className= "tc">
				<h1>ROBOFREINDS</h1>
				<SearchBox searchChange={this.onSearchChange} />
				<Scroll>
					<ErrorBoundary>
						<CardList robots = {filteredRobots} />
					</ErrorBoundary>
				</Scroll>
			</div>
			);
		};	
	};
};


export default App;