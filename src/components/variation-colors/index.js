import "./styles/variation-colors.css"
import { hslToHex, hslToRgb, round } from "../../helpers";
import Clipboard from "react-clipboard.js";

function VariationColors({name, hue, saturation, lightness}) {

    const numberOfVariations = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    
    function findNewShade(l, degree) {
        const diff = l;
        const diffStep = diff / 10;
        let shadeToSubtract = diffStep * degree;
        shadeToSubtract = Math.round(shadeToSubtract);
        const newL = Number(l) - shadeToSubtract;

        return `hsl(${hue}, ${saturation}%, ${newL}%)`;
    }

    function findNewTint(l, degree) {
        const diff = 100 - l;
        const diffStep = diff / 10;
        let tintToAdd = diffStep * degree;
        tintToAdd = Math.round(tintToAdd);
        const newL = Number(l) + tintToAdd;

        return `hsl(${hue}, ${saturation}%, ${newL}%)`;
    }

    function findNewShadeTintLightness(l, degree, shade = false, tint = false) {
        let diff;
        let newLightness;
        if (shade) {
            diff = l
        } else if (tint) {
            diff = 100 - Number(l)
        }

        const diffStep = Number(diff) / 10
        let diffAmt = Number(diffStep) * Number(degree)
        
        if (shade) {
            newLightness = Number(l) - Number(diffAmt)
        } else if (tint) {
            newLightness = Number(l) + Number(diffAmt)
        }

        return round(newLightness, 2);
    }

    function returnBasedOnName(name, lightness, n) {
        if (name === "Shades") {
            return findNewShadeTintLightness(lightness, n, true, false);
        }
        else if (name === "Tints") {
            return findNewShadeTintLightness(lightness, n, false, true);
        }
    }

    return (
			<>
				<h2 className="title">{name}</h2>
				<div>
					{numberOfVariations.map((n) => (
						<div key={n}>
							<div
								style={{
									height: 100 + "px",
                                    width: 300 + "px",
                                    margin: "auto",
									backgroundColor: `hsl(${hue}, ${saturation}%, ${returnBasedOnName(
										name,
										lightness,
										n
									)}%)`,
								}}
							></div>
							<p
								id={`hsl-${n}`}
							>{`hsl(${hue}, ${saturation}%, ${returnBasedOnName(
								name,
								lightness,
								n
							)}%)`}</p>
							<Clipboard
								data-clipboard-target={`#hsl-${n}`}
								button-title={`hsl(${hue}, ${saturation}%, ${returnBasedOnName(
									name,
									lightness,
									n
								)}%)`}
							>
								Copy HSL
							</Clipboard>
							<p id={`hex-${n}`}>
								{hslToHex(
									hue,
									saturation,
									returnBasedOnName(name, lightness, n)
								)}
							</p>
							<Clipboard
								data-clipboard-target={`#hex-${n}`}
								button-title={hslToHex(
									hue,
									saturation,
									returnBasedOnName(name, lightness, n)
								)}
							>
								Copy HEX
							</Clipboard>
							<p id={`rgb-${n}`}>
								{hslToRgb(
									hue,
									saturation,
									returnBasedOnName(name, lightness, n)
								)}
							</p>
							<Clipboard
								data-clipboard-target={`#rgb-${n}`}
								button-title={hslToRgb(
									hue,
									saturation,
									returnBasedOnName(name, lightness, n)
								)}
							>
								Copy RGB
							</Clipboard>
						</div>
					))}
				</div>
			</>
		);
}

export default VariationColors