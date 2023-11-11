import { Card, Input, Button, Typography } from "@material-tailwind/react";
import { useState } from "react";

export default function Inicio({ login }) {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [errors, setErrors] = useState("");

	const handleLogin = async (event) => {
		event.preventDefault();
		if (!username || !password) {
			setErrors("Completar campos");
			return;
		}
		login(username, password);
	};

	return (
		<div className="flex flex-col items-center justify-center min-h-screen">
			<Card color="transparent" shadow={false}>
				<Typography variant="h4" color="blue-gray">
					Comenzar
				</Typography>
				<form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
					{errors && <div className="text-red font-onest">{errors}</div>}
					<div className="mb-1 flex flex-col gap-6">
						<Typography variant="h6" color="blue-gray" className="-mb-3">
							Usuario:
						</Typography>
						<Input
							size="lg"
							name="username"
							placeholder="name@mail.com"
							className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
							labelProps={{
								className: "before:content-none after:content-none",
							}}
							value={username}
							onChange={(e) => setUsername(e.target.value)}
						/>
						<Typography variant="h6" color="blue-gray" className="-mb-3">
							PIN
						</Typography>
						<Input
							type="password"
							name="password"
							size="lg"
							placeholder="********"
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

					<Button
						className="mt-6 bg-main text-orange font-onest"
						fullWidth
						onClick={handleLogin}
					>
						Entrar
					</Button>
					<Typography color="gray" className="mt-4 text-center font-normal">
						No tienes cuenta?{" "}
						<a href="/registrar" className="font-medium text-gray-900">
							Registrate
						</a>
					</Typography>
				</form>
			</Card>
		</div>
	);
}
