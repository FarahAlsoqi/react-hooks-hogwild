import React from "react";

const HogDetails = ({ hog }) => {
	return (
		<div className="hogDetails">
			<h3>{hog.name}</h3>
			<p>Specialty: {hog.specialty}</p>
			<p>Weight: {hog.weight}</p>
			<p>Greased: {hog.greased ? "Yes" : "No"}</p>
			<p>Highest Medal Achieved: {hog["highest medal achieved"]}</p>
		</div>
	);
};

export default HogDetails;
