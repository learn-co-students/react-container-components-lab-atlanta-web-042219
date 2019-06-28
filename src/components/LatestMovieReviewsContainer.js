import React from 'react'
import MovieReview from './MovieReview'

export default function LatestMovieReviewsContainer(props) {
		return (
			<div>
				{props.reviews.map((review, index) => <MovieReview key={index} review={review} />)}
			</div>
		)
}
