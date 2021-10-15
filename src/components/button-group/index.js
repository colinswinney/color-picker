import Clipboard from "react-clipboard.js";
import { hslToHex, hslToRgb } from '../../helpers'

function ButtonGroup({color, hue, saturation, lightness}) {

	return (
		<>
			<Clipboard data-clipboard-text={color} button-title={`Copy ${color}`}>
				Copy HSL
			</Clipboard>

			<Clipboard
				data-clipboard-text={hslToHex(hue, saturation, lightness)}
				button-title={`Copy ${hslToHex(hue, saturation, lightness)}`}
			>
				Copy HEX
			</Clipboard>

			<Clipboard
				data-clipboard-text={hslToRgb(hue, saturation, lightness)}
				button-title={`Copy ${hslToRgb(hue, saturation, lightness)}`}
			>
				Copy RGB
			</Clipboard>
		</>
	);
};

export default ButtonGroup;
