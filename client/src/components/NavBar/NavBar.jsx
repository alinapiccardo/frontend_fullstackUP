import { Link } from "react-router-dom";

export default function NavBar() {
	return (
		<div className="">
			<div className="w-full px-10 py-5 shadow-lg bg-main/25 flex justify-center">
				<div className="w-1/2 flex flex-row justify-between font-onest text-orange font-black text-3xl">
					<Link to="/home" className="hover:text-green">
						Home
					</Link>
					<Link to="/myCharacters" className="hover:text-green">
						My Characters
					</Link>
					<Link to="/allOutfits" className="hover:text-green">
						Find Outfits
					</Link>
				</div>
			</div>
		</div>
	);
}
