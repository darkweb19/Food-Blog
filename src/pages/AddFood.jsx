import React from "react";

export default function AddFood() {
	return (
		<div className="container">
			<div className="row justify-content-center">
				<div className="col-12 mt-3">
					<h3 className="text-center">Add Food</h3>
					<div className="mb-3">
						<label
							htmlFor="exampleFormControlInput1"
							className="form-label"
						>
							Name
						</label>
						<input
							type="email"
							className="form-control"
							id="exampleFormControlInput1"
							placeholder="name@example.com"
						/>
					</div>

					<div className="mb-3">
						<label
							htmlFor="exampleFormControlInput1"
							className="form-label"
						>
							Price
						</label>
						<input
							type="email"
							className="form-control"
							id="exampleFormControlInput1"
							placeholder="name@example.com"
						/>
					</div>

					<div className="mb-3">
						<label
							htmlFor="exampleFormControlInput1"
							className="form-label"
						>
							Image
						</label>
						<input
							type="file"
							className="form-control"
							id="exampleFormControlInput1"
							placeholder="name@example.com"
						/>
					</div>

					<button className="btn btn-primary">Add</button>
				</div>
			</div>
		</div>
	);
}
