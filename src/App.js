import { Route, Routes } from "react-router-dom";
import About from "./container/About.tsx";
import Home from "./container/Home.tsx";
import Login from "./container/Login.tsx";

function App() {
	return (
		<div>
			<Routes>
				<Route path="/" element={<Login />} />
				<Route path="home" element={<Home />} />
				<Route path="about" element={<About />} />
			</Routes>
		</div>
	);
}

export default App;
