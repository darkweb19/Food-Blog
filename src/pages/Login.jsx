import React from "react";

const shadow = {
	borderRadius: "10px",
	boxShadow:
		"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
};

export default function Login() {
	return (
		<div className="container">
			<div
				className="d-flex justify-content-center align-items-center"
				style={{ height: "90vh" }}
			>
				<div className="row w-100 justify-content-center">
					<div className="col-6 p-5" style={shadow}>
						<div className="mb-3">
							<label
								htmlFor="exampleFormControlInput1"
								className="form-label"
							>
								Email address
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
								Password
							</label>
							<input
								type="email"
								className="form-control"
								id="exampleFormControlInput1"
								placeholder="Password123$^_^"
							/>
						</div>

						<button className="btn btn-primary">Login</button>
					</div>
				</div>
			</div>
		</div>
	);
}
