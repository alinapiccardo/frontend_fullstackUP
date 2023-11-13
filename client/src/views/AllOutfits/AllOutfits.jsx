import React, { useEffect, useState } from "react";
import axios from "axios";

const CharacterOutfit = ({ character }) => {
	const lastFiveOutfits = character.outfit
		.filter((clothes) => clothes.top && clothes.bottom && clothes.shoes)
		.slice(-5)
		.reverse();

	return (
		<div key={character._id} className="">
			{lastFiveOutfits.length > 0 && (
				<div className="w-full grid grid-cols-6 gap-11 rounded-lg shadow-lg mt-9 bg-main/20 p-10">
					<h2 className="font-primary text-green font-bold text-3xl pb-3 place-self-center">
						Outfits de <br /> {character.name}
					</h2>
					{lastFiveOutfits.map((clothes, index) => (
						<div key={index} className="shadow-md rounded-md">
							<img
								src={`/assets/images/characters/${character.face}.png`}
								alt={character.name}
								className="bg-green w-[200px] h-[200px] pt-1 rounded-t-md"
							/>

							<img
								src={`/assets/images/outfits/tops/${clothes.top.image}.jpeg`}
								alt={clothes.top.image}
								className=" bg-yellow w-[200px] h-[200px]"
							/>

							<img
								src={`/assets/images/outfits/bottoms/${clothes.bottom.image}.jpeg`}
								alt={clothes.bottom.image}
								className=" bg-orange w-[200px] h-[200px]"
							/>

							<img
								src={`/assets/images/outfits/shoes/${clothes.shoes.image}.jpeg`}
								alt={clothes.shoes.image}
								className="bg-red  w-[200px] h-[200px] rounded-b-md"
							/>
						</div>
					))}
				</div>
			)}
		</div>
	);
};

const AllOutfits = ({ user }) => {
	const [characters, setCharacters] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const { data } = await axios.get("http://localhost:3002/characters");
				setCharacters(data);
			} catch (error) {
				console.error("Error fetching characters:", error);
			}
		};

		fetchData();
	}, []);

	return (
		<div className="flex flex-col items-start mt-5 bg-white w-full p-10">
			<h1 className="font-onest text-cyan font-black uppercase text-5xl">
				{user.username} inspirate con otros outfits
			</h1>
			{characters.length === 0 ? (
				<div className="min-h-screen">
					<p className="font-primary mt-10 text-green font-black text-3xl">
						No hay otros outfits :(
					</p>
				</div>
			) : (
				<div>
					{characters.map((character) => (
						<CharacterOutfit key={character._id} character={character} />
					))}
				</div>
			)}
		</div>
	);
};

export default AllOutfits;
