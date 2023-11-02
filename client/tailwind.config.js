// tailwind.config.js
import withMT from "@material-tailwind/react/utils/withMT";

export default withMT({
	content: [
		"./src/**/*.js", // Archivos JavaScript
		"./src/**/*.jsx", // Archivos JSX
		"./src/**/*.html", // Archivos HTML
	],
	theme: {
		extend: {
			fontFamily: {
				primary: ["Electrolize"],
				onest: ["Onest, sans-serif"],
			},
			colors: {
				cyan: "#007096",
				green: "#2BAF90",
				main: "#A1D4B1",
				yellow: "#F1A512",
				orange: "#DD4111",
				red: "#8C0027",
				gray: {
					900: "#333333",
					800: "#666666",
					700: "#9E9E9E",
					600: "#CECECE",
					500: "#DEDEDE",
					400: "#EEEEEE",
					300: "#FEFEFE",
					200: "#FAFAFA",
					100: "#FBFBFB",
				},
			},
		},
	},
	plugins: [
		// ...
	],
});
