import React from "react";

const shadow = {
	borderRadius: "5px",
	boxShadow:
		"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.18)",
};

export default function Cards({ banner }) {
	return (
		<div className="col-4 my-3">
			<div className="card" style={shadow}>
				<img src={banner} className="card-img-top" alt="..." />
				<div className="card-body">
					<p className="card-text">Created At: 25th April 2023</p>
				</div>
			</div>
		</div>
	);
}
