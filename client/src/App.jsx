import { Routes, Route, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Inicio from "./views/InicioSesion/Inicio.jsx";
import Registro from "./views/InicioSesion/Registro.jsx";
import Home from "./views/Home/Home";
import axios from "axios";

function App() {
	const location = useLocation();
	const [showNavbar, setShowNavbar] = useState(false);
	const [player, setPlayer] = useState({});
	const navigate = useNavigate();
	useEffect(() => {
		if (location.pathname !== "/" && location.pathname !== "/registrar") {
			setShowNavbar(true);
		} else {
			setShowNavbar(false);
		}
	}, [location]);
	const login = async (username, password) => {
		try {
			const { data } = await axios.post("http://localhost:3002/login", {
				username,
				password,
			});
			if (data) {
				console.log("player", data);
				alert("inicio exitoso.");
				setPlayer(data);
				navigate("/home");
			}
		} catch (error) {
			window.alert(error.message);
		}
	};
	return (
		<>
			{showNavbar && <NavBar />}
			<Routes>
				<Route path="/" element={<Inicio login={login} />} />
				<Route path="/registrar" element={<Registro />} />
				<Route path="/home" element={<Home player={player} />} />
			</Routes>
		</>
	);
}
export default App;
