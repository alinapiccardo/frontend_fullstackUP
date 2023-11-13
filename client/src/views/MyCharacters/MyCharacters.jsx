import React, { useEffect, useState } from "react";
import axios from "axios";

const MyCharacters = ({ user }) => {
	const [characters, setCharacters] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const { data } = await axios.get(
					`http://localhost:3002/users/${user._id}`
				);
				setCharacters(data.myCharacters.reverse());
			} catch (error) {
				console.error("Error fetching characters:", error);
			}
		};

		fetchData();
	}, [user]);

	console.log(characters);
	return (
		<div className="flex flex-col items-start mt-5 bg-white w-full p-10">
			<h1 className="font-onest text-cyan font-black uppercase text-5xl">
				{user.username} encuentra tus personajes
			</h1>
			{characters.length === 0 ? (
				<div className="min-h-screen">
					<p className="font-primary mt-10 text-green font-black text-3xl">
						Elegi tus personajes y outfits favoritos para verlos aqui :){" "}
					</p>
				</div>
			) : (
				<div className="w-full grid grid-cols-5 gap-4 mt-9">
					{characters.map((character) => (
						<div
							key={character._id}
							className="bg-main/20 w-full p-10 rounded-lg shadow-lg"
						>
							<div className="px-2 w-full">
								<h2 className="font-primary text-green font-bold text-3xl pb-3">
									{character.name}
								</h2>
								<img
									src={`/assets/images/characters/${character.face}.png`}
									alt={character.name}
									className="bg-green w-[200px] h-[200px] pt-1 rounded-t-md"
								/>
								{character.outfit && (
									<div className="">
										<div className="">
											<img
												src={`/assets/images/outfits/tops/${character.outfit.top.image}.jpeg`}
												alt={character.outfit.top}
												className=" bg-yellow w-[200px] h-[200px]"
											/>

											<img
												src={`/assets/images/outfits/bottoms/${character.outfit.bottom.image}.jpeg`}
												alt={character.outfit.bottom}
												className=" bg-orange w-[200px] h-[200px]"
											/>

											<img
												src={`/assets/images/outfits/shoes/${character.outfit.shoes.image}.jpeg`}
												alt={character.outfit.shoes}
												className="bg-red  w-[200px] h-[200px] rounded-b-md"
											/>
										</div>
									</div>
								)}
							</div>
						</div>
					))}
				</div>
			)}
		</div>
	);
};

export default MyCharacters;
