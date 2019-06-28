import React from 'react'

export default function SearchableMovieReviewsContainer(props) {
		return (
			<form onSubmit={props.fetchReviews}>
				<input name="searchField" required type="text" placeholder=" Search Reviews" />
				<button type="submit"><i className="search icon"></i></button>
			</form>
		)
}
