import { hslToHex, hslToRgb } from "../../helpers";
import "./styles/header.css"
import TextToCopy from "../text-to-copy";

function Header({ color, hue, saturation, lightness, children }) {

	return (
		<header className="header">
			<h1 className="title">HSL Color Picker</h1>
			<p className="subtitle">
				Click on any HSL, HEX, or RGB value to copy to your clipboard!
			</p>
			<div className="color-window" style={{ backgroundColor: color }}></div>

			{children}

			<div className="text-block">
				<p>
					<TextToCopy clipboardText={color} btnTitle={`Copy ${color}`}>
						{color}
					</TextToCopy>
				</p>
				<p>
					<TextToCopy
						clipboardText={hslToHex(hue, saturation, lightness)}
						btnTitle={`Copy ${hslToHex(hue, saturation, lightness)}`}
					>
						{hslToHex(hue, saturation, lightness)}
					</TextToCopy>
				</p>
				<p>
					<TextToCopy
						clipboardText={hslToRgb(hue, saturation, lightness)}
						btnTitle={`Copy ${hslToRgb(hue, saturation, lightness)}`}
					>
						{hslToRgb(hue, saturation, lightness)}
					</TextToCopy>
				</p>
			</div>
		</header>
	);
}

export default Header;
