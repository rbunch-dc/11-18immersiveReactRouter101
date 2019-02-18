import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Movies extends Component{
	constructor(){
		super();
		this.state = {
			movieList: []
		}
	}

	componentDidMount(){
		var url = 'https://api.themoviedb.org/3/movie/now_playing?api_key=fec8b5ab27b292a68294261bb21b04a5&query=superman';
		axios.get(url)
		.then((movieData)=>{
			var movieResults = movieData.data.results;
			this.setState({
				movieList: movieResults
			})
		})
	}

	componentWillReceiveProps(newProps){
		console.log(newProps);
		// var path = newProps.location.pathname;
		// var pathArray = path.split('/');
		// var mid = pathArray[2];
	}

	render(){
		var movies = this.state.movieList.map((movie, index)=>{
			return(
				<Link to={`/movies/${movie.id}`} key={index}>
					<h3>{movie.title}</h3>
				</Link>
			)
		});

		return(
			<div className="movie-listing">
				<h1>Movies Page</h1>
				{movies}
			</div>
		)
	}
}

export default Movies;