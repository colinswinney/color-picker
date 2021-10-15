import { hslToHex, hslToRgb } from "../../helpers";
import "./styles/header.css"
import Clipboard from "react-clipboard.js";

function Header({ color, hue, saturation, lightness, children }) {

	return (
		<header className="header">
			<h1 class="title">HSL Color Picker</h1>
			<p class="subtitle">
				Click on any HSL, HEX, or RGB value to copy to your clipboard!
			</p>
			<div className="color-window" style={{ backgroundColor: color }}></div>

			{children}

			<div className="text-block">
				<p>
					<Clipboard
						component="span"
						data-clipboard-text={color}
						button-title={`Copy ${color}`}
					>
						{color}
					</Clipboard>
				</p>
				<br />
				<p>
					<Clipboard
						component="span"
						data-clipboard-text={hslToHex(hue, saturation, lightness)}
						button-title={`Copy ${hslToHex(hue, saturation, lightness)}`}
					>
						{hslToHex(hue, saturation, lightness)}
					</Clipboard>
				</p>
				<br />
				<p>
					<Clipboard
						component="span"
						data-clipboard-text={hslToRgb(hue, saturation, lightness)}
						button-title={`Copy ${hslToRgb(hue, saturation, lightness)}`}
					>
						{hslToRgb(hue, saturation, lightness)}
					</Clipboard>
				</p>
			</div>
		</header>
	);
}

export default Header;
