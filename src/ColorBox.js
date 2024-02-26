import { useState } from "react";
import "./ColorBox.css";

export default function ColorBox() {
	const randomColor = () => {
		return "#" + Math.floor(Math.random() * 16777215).toString(16); // Generate a random color
	
	};
	const [color, setColor] = useState(randomColor());

	const handleColor = () => {
		setColor(randomColor());
	};
	return (
		<div
			className="ColorBox"
			onClick={handleColor}
			style={{
				backgroundColor: color,
				display: "flex",
				margin: "auto",
				justifyContent: "center",
				alignItems: "center",
			}}>
			ColorBox
		</div>
		
	);
}
