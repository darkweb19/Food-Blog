import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import AddFood from "./pages/AddFood";
import Home from "./pages/Home";
import ViewFood from "./pages/ViewFood";
import Login from "./pages/Login";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		children: [
			{
				path: "/",
				element: <Home />,
			},
			{
				path: "/add",
				element: <AddFood />,
			},
			{
				path: "/home",
				element: <Home />,
			},
			{
				path: "view",
				element: <ViewFood />,
			},
			{
				path: "/login",
				element: <Login />,
			},
		],
	},
]);

export default router;
