import React from "react";
import banner1 from "../../public/assets/images/banner1.jpg";
import banner2 from "../../public/assets/images/banner2.jpg";
import banner3 from "../../public/assets/images/banner3.jpg";
const shadow = {
	borderRadius: "5px",
	boxShadow:
		"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
};

export default function Home() {
	return (
		<>
			<div
				id="carouselExampleIndicators"
				className="carousel slide"
				data-ride="carousel"
			>
				<ol className="carousel-indicators">
					<li
						data-target="#carouselExampleIndicators"
						data-slide-to="0"
						className="active"
					></li>
					<li
						data-target="#carouselExampleIndicators"
						data-slide-to="1"
					></li>
					<li
						data-target="#carouselExampleIndicators"
						data-slide-to="2"
					></li>
				</ol>
				<div className="carousel-inner">
					<div className="carousel-item active">
						<img
							className="d-block w-100"
							src={banner1}
							alt="First slide"
						/>
					</div>
					<div className="carousel-item">
						<img
							className="d-block w-100"
							src={banner2}
							alt="Second slide"
						/>
					</div>
					<div className="carousel-item">
						<img
							className="d-block w-100"
							src={banner3}
							alt="Third slide"
						/>
					</div>
				</div>
				<a
					className="carousel-control-prev"
					href="#carouselExampleIndicators"
					role="button"
					data-slide="prev"
				>
					<span
						className="carousel-control-prev-icon"
						aria-hidden="true"
					></span>
					<span className="sr-only">Previous</span>
				</a>
				<a
					className="carousel-control-next"
					href="#carouselExampleIndicators"
					role="button"
					data-slide="next"
				>
					<span
						className="carousel-control-next-icon"
						aria-hidden="true"
					></span>
					<span className="sr-only">Next</span>
				</a>
			</div>

			{/* This is for carsds  */}

			<div className="container">
				<h1 className="text-center mt-3">Our Menu</h1>
				<div
					className="row my-3"
					data-masonry='{"percentPosition": true }'
				>
					<div className="col-4 my-3 ">
						<div className="card" style={shadow}>
							<img
								src="./assets/images/banner1.jpg"
								className="card-img-top"
								alt="..."
							/>
							<div className="card-body">
								<p className="card-text">
									Created At: 25th April 2023
								</p>
							</div>
						</div>
					</div>

					<div className="col-4 my-3">
						<div className="card" style={shadow}>
							<img
								src="./assets/images/banner3.jpg"
								className="card-img-top"
								alt="..."
							/>
							<div className="card-body">
								<p className="card-text">
									Created At: 25th April 2023
								</p>
							</div>
						</div>
					</div>

					<div className="col-4 my-3">
						<div className="card" style={shadow}>
							<img
								src="./assets/images/banner1.jpg"
								className="card-img-top"
								alt="..."
							/>
							<div className="card-body">
								<p className="card-text">
									Created At: 25th April 2023
								</p>
							</div>
						</div>
					</div>

					<div className="col-4 my-3">
						<div className="card" style={shadow}>
							<img
								src="./assets/images/banner2.jpg"
								className="card-img-top"
								alt="..."
							/>
							<div className="card-body">
								<p className="card-text">
									Created At: 25th April 2023
								</p>
							</div>
						</div>
					</div>

					<div className="col-4 my-3">
						<div className="card" style={shadow}>
							<img
								src="./assets/images/banner2.jpg"
								className="card-img-top"
								alt="..."
							/>
							<div className="card-body">
								<p className="card-text">
									Created At: 25th April 2023
								</p>
							</div>
						</div>
					</div>

					<div className="col-4 my-3">
						<div className="card" style={shadow}>
							<img
								src="./assets/images/banner3.jpg"
								className="card-img-top"
								alt="..."
							/>
							<div className="card-body">
								<p className="card-text">
									Created At: 25th April 2023
								</p>
							</div>
						</div>
					</div>

					<div className="col-4 my-3">
						<div className="card" style={shadow}>
							<img
								src="./assets/images/banner1.jpg"
								className="card-img-top"
								alt="..."
							/>
							<div className="card-body">
								<p className="card-text">
									Created At: 25th April 2023
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
