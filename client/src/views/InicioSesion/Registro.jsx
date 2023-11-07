import { Card, Input, Button, Typography } from "@material-tailwind/react";
import { useState } from "react";
import axios from "axios";

export default function Registro() {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");

	const handleRegister = async () => {
		if (!username || !password) {
			setError("Faltan completar campos.");
			return;
		}

		if (!/^\d{1,5}$/.test(password)) {
			setError("Max 5 numeros");
			return;
		}

		try {
			const response = await axios.post("http://localhost:3002/users", {
				username,
				password,
			});

			if (response.status === 201) {
				//history.push("/login");
				alert("Registro exitoso.");
				setError("");
			} else {
				setError(response.data.error);
				console.log(response.data.error);
			}
		} catch (error) {
			// console.log("error", error.response.data.error);
			setError(error.response.data.error);
		}
	};

	return (
		<Card color="transparent" shadow={false}>
			<Typography variant="h4" color="blue-gray">
				Registrarse
			</Typography>
			<form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
				<div className="mb-1 flex flex-col gap-6">
					<Typography variant="h6" color="blue-gray" className="-mb-3">
						Usuario:
					</Typography>
					<Input
						size="lg"
						placeholder="name@mail.com"
						className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
						labelProps={{
							className: "before:content-none after:content-none",
						}}
						value={username}
						onChange={(e) => setUsername(e.target.value)}
					/>
					<Typography variant="h6" color="blue-gray" className="-mb-3">
						PIN (Max 5 digits):
					</Typography>
					<Input
						type="text"
						name="password"
						size="lg"
						placeholder="12345"
						className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
						labelProps={{
							className: "before:content-none after:content-none",
						}}
						value={password}
						onChange={(e) => {
							const value = e.target.value.replace(/\D/g, "");
							setPassword(value);
						}}
					/>
				</div>
				{error && <div className="text-red-500">{error}</div>}
				<Button className="mt-6" fullWidth onClick={handleRegister}>
					Registrarse
				</Button>
				<Typography color="gray" className="mt-4 text-center font-normal">
					¿Ya tienes una cuenta?{" "}
					<a href="/" className="font-medium text-gray-900">
						Iniciar Sesión
					</a>
				</Typography>
			</form>
		</Card>
	);
}
