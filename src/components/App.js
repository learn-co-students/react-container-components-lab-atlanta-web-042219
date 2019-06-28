import React from 'react'
import 'isomorphic-fetch';
import LatestMovieReviewsContainer from './LatestMovieReviewsContainer';
import SearchableMovieReviewsContainer from './SearchableMovieReviewsContainer';

const NYT_API_KEY = '&api-key=sp0kdmGPAvjTRtSbiCEvoRNJf9tsnliR' //'f98593a095b44546bf4073744b540da0'; // doesn't work
// const URL_DEFAULT = `https://api.nytimes.com/svc/movies/v2/reviews/all.json?api-key=${NYT_API_KEY}`;
const URL_SEARCH  = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?query='


export default class App extends React.Component {

	constructor(){
		super()
		this.state= { reviews: [] }
	}

	fetchReviews = (e)=>{
		e.preventDefault()
		fetch(URL_SEARCH+e.target.searchField.value+NYT_API_KEY)
		.then(resp => resp.json())
		.then(resp => this.setState({ reviews: resp.results }))
		e.target.reset()
	}

	render() {
		return (
			<div className="app">
		    <SearchableMovieReviewsContainer fetchReviews={this.fetchReviews} />
		    <LatestMovieReviewsContainer reviews={this.state.reviews} />
			</div>
		)
	}
}