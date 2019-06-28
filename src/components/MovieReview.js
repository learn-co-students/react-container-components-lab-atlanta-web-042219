import React from 'react'

export default function MovieReview(props) {
	console.log(props.review)
	return (
		<div className="row review-container" >
			{props.review.multimedia ? <div className="col-5 review-image"><img draggable="false" src={props.review.multimedia.src} alt={props.review.display_title} /></div> : null}
			<div className="col-7 review-content">
				<a href={props.review.link.url}><h3>{props.review.headline}</h3></a>
				<h5>{props.review.byline} reviews "{props.review.display_title}"</h5>
				<p>{props.review.summary_short}</p>
			</div>
		</div>
	)
}