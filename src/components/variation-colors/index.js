import "./styles/variation-colors.css"
import { hslToHex, hslToRgb, round } from "../../helpers";
import TextToCopy from "../text-to-copy";

function VariationColors({name, hue, saturation, lightness}) {

    const numberOfVariations = Array.from({ length: 10 }, (_, i) => i + 1);

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
			<div>
				<h2 className="title">{name}</h2>
				<div className="color-grid">
					{numberOfVariations.map((n) => (
						<div key={n} className="color-grid-cell">
							<div
								className="color-grid-swatch"
								style={{
									backgroundColor: `hsl(${hue}, ${saturation}%, ${returnBasedOnName(
										name,
										lightness,
										n
									)}%)`,
								}}
							></div>
							<div className="color-grid-text-block">
								<p>
									<TextToCopy
										clipboardText={`hsl(${hue}, ${saturation}%, ${returnBasedOnName(
											name,
											lightness,
											n
										)}%)`}
										btnTitle={`Copy ${`hsl(${hue}, ${saturation}%, ${returnBasedOnName(
											name,
											lightness,
											n
										)}%)`}`}
									>{`hsl(${hue}, ${saturation}%, ${returnBasedOnName(
										name,
										lightness,
										n
									)}%)`}</TextToCopy>
								</p>
								<br />
								<p>
									<TextToCopy
										clipboardText={hslToHex(
											hue,
											saturation,
											returnBasedOnName(name, lightness, n)
										)}
										btnTitle={`Copy ${hslToHex(
											hue,
											saturation,
											returnBasedOnName(name, lightness, n)
										)}`}
									>
										{hslToHex(
											hue,
											saturation,
											returnBasedOnName(name, lightness, n)
										)}
									</TextToCopy>
								</p>
								<br />
								<p>
									<TextToCopy
										clipboardText={hslToRgb(
											hue,
											saturation,
											returnBasedOnName(name, lightness, n)
										)}
										btnTitle={`Copy ${hslToRgb(
											hue,
											saturation,
											returnBasedOnName(name, lightness, n)
										)}`}
									>
										{hslToRgb(
											hue,
											saturation,
											returnBasedOnName(name, lightness, n)
										)}
									</TextToCopy>
								</p>
							</div>
						</div>
					))}
				</div>
			</div>
		);
}

export default VariationColors