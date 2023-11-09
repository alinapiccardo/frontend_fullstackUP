import { Routes, Route, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Inicio from "./views/InicioSesion/Inicio.jsx";
import Registro from "./views/InicioSesion/Registro.jsx";
import Home from "./views/Home/Home";
import { userLogin, getUserLoggedIn } from "./redux/actions.js";

function App() {
	const location = useLocation();
	const [showNavbar, setShowNavbar] = useState(false);
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const user = useSelector((state) => state.userLogged);

	useEffect(() => {
		if (location.pathname !== "/" && location.pathname !== "/registrar") {
			setShowNavbar(true);
		} else {
			setShowNavbar(false);
		}
		const storedUser = sessionStorage.getItem("user");
		if (storedUser) {
			const parsedUser = JSON.parse(storedUser);
			dispatch(getUserLoggedIn(parsedUser));
		}
	}, [dispatch, location]);

	const login = (username, password) => {
		dispatch(userLogin(username, password));
		if (user) {
			setTimeout(() => {
				navigate("/home");
			}, 3000);
		}
	};

	return (
		<>
			{showNavbar && <NavBar />}
			<Routes>
				<Route path="/" element={<Inicio login={login} />} />
				<Route path="/registrar" element={<Registro />} />
				<Route path="/home" element={<Home />} />
			</Routes>
		</>
	);
}
export default App;
