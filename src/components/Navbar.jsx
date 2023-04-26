import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
	return (
		<div>
			{/* <Link to="/home">Home</Link> | <Link to="/add">Add Food</Link> |{" "}
			<Link to="/view">View Food</Link> */}
			<nav className="navbar bg-body-tertiary">
				<div className="container-fluid">
					<Link className="navbar-brand" to="/">
						Food-Blog
					</Link>
					<ul className="nav">
						<li className="nav-item">
							<Link className="nav-link mx-3" to="/home">
								Home
							</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link mx-3" to="/add">
								Add Food
							</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link mx-3" to="/view">
								View Food
							</Link>
						</li>
					</ul>
					<form className="d-flex" role="search">
						<input
							className="form-control mx-2"
							type="search"
							placeholder="Search"
							aria-label="Search"
						/>
						<button
							className="btn btn-outline-success"
							type="submit"
						>
							Search
						</button>
					</form>
					<div>
						<Link
							className="btn btn-outline-success mx-2"
							to="/login"
						>
							Login
						</Link>
						<button
							className="btn btn-outline-danger"
							type="submit"
						>
							Logout
						</button>
					</div>
				</div>
			</nav>
		</div>
	);
}
