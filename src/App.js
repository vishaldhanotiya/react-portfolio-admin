import { Route, Outlet, Routes } from "react-router-dom";
import Login from "./container/Login.tsx";
import MainScreen from "./container/MainScreen.tsx";

function App() {
	return (
		<>
			<Routes>
				<Route path="mainScreen" element={<MainScreen />} />
				<Route path="/" element={<Login />} />
			</Routes>
		</>
	);
}

export default App;
