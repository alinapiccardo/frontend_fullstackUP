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
		const newCharacter = {
			character: selectedCharacter,
			top: selectedTop,
			bottom: selectedBottom,
			shoes: selectedShoes,
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
	};

	console.log("myChars", myCharacters);

	return (
		<div className="flex flex-col items-center w-full mt-10">
			<h1 className="font-onest text-main font-black uppercase text-5xl">
				WELCOME {user.username}
			</h1>
			<p className="pt-10 font-onest font-semibold text-xl text-orange">
				Personajes:
			</p>
			<div className="flex w-2/3 p-10">
				<div className="flex flex-row ">
					{chars &&
						chars.map((char) => (
							<div className="p-10 shadow-lg rounded-lg ml-5" key={char.id}>
								<h1 className="font-primary text-yellow font-bold text-2xl">
									{char.name}
								</h1>
								<img
									src={`/assets/images/characters/${char.face}.png`}
									alt={char.name}
									className="w-[200px] h-[200px] hover:opacity-30 hover:cursor-pointer"
									onClick={() => setSelectedCharacter(char)}
								></img>
							</div>
						))}
				</div>
			</div>
			<p className="pt-10 font-onest font-semibold text-2xl text-orange">
				Outfits:
			</p>
			<p className="pt-5 font-onest font-semibold text-xl text-main">Tops:</p>
			<div className="flex w-2/3 p-10">
				<div className="flex flex-row ">
					{outfits &&
						outfits
							.filter((outfit) => outfit.category === "top")
							.map((top) => (
								<div className="p-10 shadow-lg rounded-lg ml-5" key={top.id}>
									<img
										src={`/assets/images/outfits/tops/${top.image}.jpeg`}
										alt={top.name}
										className="w-[200px] h-[200px] hover:opacity-30 hover:cursor-pointer"
										onClick={() => setSelectedTop(top)}
									/>
								</div>
							))}
				</div>
			</div>
			<p className="pt-5 font-onest font-semibold text-xl text-main">
				Bottoms:
			</p>
			<div className="flex w-2/3 p-10">
				<div className="flex flex-row">
					{outfits &&
						outfits
							.filter((outfit) => outfit.category === "bottom")
							.map((bottom) => (
								<div className="p-10 shadow-lg rounded-lg ml-5" key={bottom.id}>
									<img
										src={`/assets/images/outfits/bottoms/${bottom.image}.jpeg`}
										alt={bottom.name}
										className="w-[200px] h-[200px] hover:opacity-30 hover:cursor-pointer"
										onClick={() => setSelectedBottom(bottom)}
									/>
								</div>
							))}
				</div>
			</div>
			<p className="pt-5 font-onest font-semibold text-xl text-main">Shoes:</p>
			<div className="flex w-2/3 p-10">
				<div className="flex flex-row">
					{outfits &&
						outfits
							.filter((outfit) => outfit.category === "shoes")
							.map((shoes) => (
								<div className="p-10 shadow-lg rounded-lg ml-5" key={shoes.id}>
									<img
										src={`/assets/images/outfits/shoes/${shoes.image}.jpeg`}
										alt={shoes.name}
										className="w-[200px] h-[200px] hover:opacity-30 hover:cursor-pointer"
										onClick={() => setSelectedShoes(shoes)}
									/>
								</div>
							))}
				</div>
			</div>
			<button onClick={handleConfirmSelection}>Confirmar Selección</button>
			{selectedCharacter && (
				<div className="flex flex-col items-center fixed top-[100px] right-5">
					<h1 className="font-onest text-main font-black uppercase text-5xl">
						{selectedCharacter.name}
					</h1>
					<img
						src={`/assets/images/characters/${selectedCharacter.face}.png`}
						alt={selectedCharacter.name}
						className="w-[200px] h-[200px]"
					/>
					{selectedTop && (
						<img
							src={`/assets/images/outfits/tops/${selectedTop.image}.jpeg`}
							alt={selectedTop.name}
							className="w-[200px] h-[200px]"
						/>
					)}
					{selectedBottom && (
						<img
							src={`/assets/images/outfits/bottoms/${selectedBottom.image}.jpeg`}
							alt={selectedBottom.name}
							className="w-[200px] h-[200px]"
						/>
					)}
					{selectedShoes && (
						<img
							src={`/assets/images/outfits/shoes/${selectedShoes.image}.jpeg`}
							alt={selectedShoes.name}
							className="w-[200px] h-[200px]"
						/>
					)}
				</div>
			)}
		</div>
	);
}
