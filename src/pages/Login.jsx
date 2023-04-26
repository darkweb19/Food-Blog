import React from "react";
const shadow = {
	borderRadius: "10px",
	boxShadow:
		"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
};

export default function Login() {
	return (
		<div class="container">
			<div
				class="d-flex justify-content-center align-items-center"
				style={{ height: "90vh" }}
			>
				<div class="row w-100 justify-content-center">
					<div class="col-6 p-5" style={shadow}>
						<div class="mb-3">
							<label
								for="exampleFormControlInput1"
								class="form-label"
							>
								Email address
							</label>
							<input
								type="email"
								class="form-control"
								id="exampleFormControlInput1"
								placeholder="name@example.com"
							/>
						</div>

						<div class="mb-3">
							<label
								for="exampleFormControlInput1"
								class="form-label"
							>
								Password
							</label>
							<input
								type="email"
								class="form-control"
								id="exampleFormControlInput1"
								placeholder="Password123$^_^"
							/>
						</div>

						<button class="btn btn-primary">Login</button>
					</div>
				</div>
			</div>
		</div>
	);
}
