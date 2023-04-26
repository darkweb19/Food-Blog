import React from "react";
import banner1 from "../../public/assets/images/banner1.jpg";
import banner2 from "../../public/assets/images/banner2.jpg";
import banner3 from "../../public/assets/images/banner3.jpg";
import Cards from "../components/Cards";
import Carosusel from "../components/Carosusel";

const shadow = {
	borderRadius: "5px",
	boxShadow:
		"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
};

export default function Home() {
	return (
		<>
			{/* This is for banner carousel */}
			<Carosusel banner={[banner1, banner2, banner3]} />

			{/* This is for carsds  */}
			<div className="container">
				<h1 className="text-center mt-3">Our Menu</h1>
				<div className="row my-3">
					<Cards banner={banner1} />
					<Cards banner={banner2} />
					<Cards banner={banner3} />
					<Cards banner={banner3} />
					<Cards banner={banner1} />
					<Cards banner={banner2} />
				</div>
			</div>
		</>
	);
}
