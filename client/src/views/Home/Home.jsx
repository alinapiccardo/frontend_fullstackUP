import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";

export default function Home() {
	const user = useSelector((state) => state.userLogged);

	const [chars, setChars] = useState([]);
	const [outfits, setOutfits] = useState([]);
	const [selectedCharacter, setSelectedCharacter] = useState(null);
	const [selectedTop, setSelectedTop] = useState(null);
	const [selectedBottom, setSelectedBottom] = useState(null);
	const [selectedShoes, setSelectedShoes] = useState(null);
	const [myCharacters, setMyCharacters] = useState([]);

	const getChars = async () => {
		const { data } = await axios.get("http://localhost:3002/characters/");
		setChars(data);
	};

	const getOutfits = async () => {
		const { data } = await axios.get("http://localhost:3002/outfits");
		setOutfits(data);
	};

	useEffect(() => {
		getChars();
		getOutfits();
	}, []);

	const handleConfirmSelection = () => {
		if (!selectedTop || !selectedBottom || !selectedShoes) {
			alert(
				"Please choose a top, bottom, and shoes before confirming the selection."
			);
			return;
		}

		const newCharacter = {
			character: selectedCharacter,
			top: selectedTop,
			bottom: selectedBottom,
			shoes: selectedShoes,
		};

		const updatedCharacter = {
			...selectedCharacter,
			outfit: {
				top: selectedTop,
				bottom: selectedBottom,
				shoes: selectedShoes,
			},
		};

		const updatedCharacters =
			myCharacters.length === 0
				? [newCharacter]
				: [...myCharacters, newCharacter];

		setMyCharacters(updatedCharacters);
		setSelectedCharacter(null);
		setSelectedTop(null);
		setSelectedBottom(null);
		setSelectedShoes(null);

		addOutfitToCharacter(updatedCharacter);
	};

	const addOutfitToCharacter = async (updatedCharacter) => {
		console.log("uC in addOutfit", updatedCharacter);
		try {
			await axios.put(
				`http://localhost:3002/characters/${updatedCharacter._id}`,
				updatedCharacter
			);

			console.log("Character updated successfully!");
		} catch (error) {
			console.error("Error updating character:", error);
		}
	};

	console.log("myChars", myCharacters);

	return (
		<div className="flex flex-col items-start ml-[100px] mt-5 bg-white w-full p-10">
			<h1 className="font-onest text-cyan font-black uppercase text-5xl">
				WELCOME {user.username}
			</h1>
			<h2 className="font-onest text-cyan pt-5 font-black uppercase text-3xl">
				Crea tus atuendos preferidos :)
			</h2>
			<p className="pt-10 font-onest font-semibold text-2xl text-green">
				1er Paso: Elegi tu Personaje:
			</p>
			<div className="flex w-2/3">
				<div className="flex flex-row ">
					{chars &&
						chars.map((char) => (
							<div className="mr-5 pt-5" key={char.id}>
								<h1 className="font-primary text-green font-bold text-3xl">
									{char.name}
								</h1>
								<img
									src={`/assets/images/characters/${char.face}.png`}
									alt={char.name}
									className="shadow-lg p-2 bg-green rounded-lg w-[200px] h-[200px] hover:opacity-30 hover:cursor-pointer"
									onClick={() => setSelectedCharacter(char)}
								></img>
							</div>
						))}
				</div>
			</div>

			<p className="pt-5 font-onest font-semibold text-2xl text-yellow">
				2do Paso: Elegi tu Top:
			</p>
			<div className="flex w-2/3">
				<div className="flex flex-row ">
					{outfits &&
						outfits
							.filter((outfit) => outfit.category === "top")
							.map((top) => (
								<div className="mr-5 pt-5" key={top.id}>
									<img
										src={`/assets/images/outfits/tops/${top.image}.jpeg`}
										alt={top.name}
										className="shadow-lg p-2 bg-yellow rounded-lg w-[200px] h-[200px] hover:opacity-30 hover:cursor-pointer"
										onClick={() => setSelectedTop(top)}
									/>
								</div>
							))}
				</div>
			</div>
			<p className="pt-5 font-onest font-semibold text-2xl text-orange">
				3er Paso: Elegi tu Bottom:
			</p>
			<div className="flex w-2/3">
				<div className="flex flex-row">
					{outfits &&
						outfits
							.filter((outfit) => outfit.category === "bottom")
							.map((bottom) => (
								<div className="mr-5 pt-5" key={bottom.id}>
									<img
										src={`/assets/images/outfits/bottoms/${bottom.image}.jpeg`}
										alt={bottom.name}
										className="shadow-lg p-2 bg-orange rounded-lg w-[200px] h-[200px] hover:opacity-30 hover:cursor-pointer"
										onClick={() => setSelectedBottom(bottom)}
									/>
								</div>
							))}
				</div>
			</div>
			<p className="pt-5 font-onest font-semibold text-2xl text-red">
				4to Paso: Elegi tus Zapatos:
			</p>
			<div className="flex w-2/3">
				<div className="flex flex-row">
					{outfits &&
						outfits
							.filter((outfit) => outfit.category === "shoes")
							.map((shoes) => (
								<div className="mr-5 pt-5" key={shoes.id}>
									<img
										src={`/assets/images/outfits/shoes/${shoes.image}.jpeg`}
										alt={shoes.name}
										className="shadow-lg p-2 bg-red rounded-lg w-[200px] h-[200px] hover:opacity-30 hover:cursor-pointer"
										onClick={() => setSelectedShoes(shoes)}
									/>
								</div>
							))}
				</div>
			</div>

			{selectedCharacter && (
				<div className="flex flex-col items-center fixed top-[100px] right-0 p-11 bg-white shadow-lg rounded-lg ">
					<h1 className="font-onest text-cyan font-black text-xl">
						Tu Outfit: <br />
						{selectedCharacter.name}
					</h1>
					<img
						src={`/assets/images/characters/${selectedCharacter.face}.png`}
						alt={selectedCharacter.name}
						className="w-[150px] h-[150px]"
					/>
					{selectedTop && (
						<img
							src={`/assets/images/outfits/tops/${selectedTop.image}.jpeg`}
							alt={selectedTop.name}
							className="w-[150px] h-[150px]"
						/>
					)}
					{selectedBottom && (
						<img
							src={`/assets/images/outfits/bottoms/${selectedBottom.image}.jpeg`}
							alt={selectedBottom.name}
							className="w-[150px] h-[150px]"
						/>
					)}
					{selectedShoes && (
						<img
							src={`/assets/images/outfits/shoes/${selectedShoes.image}.jpeg`}
							alt={selectedShoes.name}
							className="w-[150px] h-[150px]"
						/>
					)}
				</div>
			)}

			<button onClick={handleConfirmSelection}>Confirmar Selección</button>
		</div>
	);
}
