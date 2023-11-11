import React, { useEffect, useState } from "react";
import axios from "axios";

const CharacterOutfit = ({ character }) => {
	const lastFiveOutfits = character.outfit.slice(0, 5);

	return (
		<div key={character._id} className="character-container">
			<h2>{character.name}</h2>
			<img
				src={`/assets/images/characters/${character.face}.png`}
				alt={character.name}
			/>

			{lastFiveOutfits.length > 0 && (
				<div className="outfit-container">
					<h3>Last 5 Outfits:</h3>
					{lastFiveOutfits.map((clothes, index) => (
						<div key={index} className="clothes">
							<p>Top: {clothes.top && clothes.top.image}</p>
							<p>Bottom: {clothes.bottom && clothes.bottom.image}</p>
							<p>Shoes: {clothes.shoes && clothes.shoes.image}</p>
						</div>
					))}
				</div>
			)}
		</div>
	);
};

const AllOutfits = () => {
	const [characters, setCharacters] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const { data } = await axios.get("http://localhost:3002/characters");
				// Assuming the backend provides characters with outfits in descending order
				setCharacters(data);
			} catch (error) {
				console.error("Error fetching characters:", error);
			}
		};

		fetchData();
	}, []);

	return (
		<div className="all-outfits-container">
			<h1>Last 5 Outfits for Each Character</h1>
			{characters.map((character) => (
				<CharacterOutfit key={character._id} character={character} />
			))}
		</div>
	);
};

export default AllOutfits;
