import React, { Component } from "react";

export default class ViewFood extends Component {
	render() {
		return (
			<div className="container">
				<div className="row justify-content-center">
					<div className="col-12 mt-3">
						<h3 className="text-center">Food List</h3>
						<table className="table">
							<thead>
								<tr>
									<th scope="col">S.N</th>
									<th scope="col">Name</th>
									<th scope="col">Price</th>
									<th scope="col">Image</th>
									<th scope="col">Action</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<th scope="row">1</th>
									<td>Mark</td>
									<td>Otto</td>
									<td>@mdo</td>
									<td>
										<a className="btn btn-info" href="#">
											Edit
										</a>
										<a className="btn btn-danger" href="#">
											Delete
										</a>
									</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			</div>
		);
	}
}
