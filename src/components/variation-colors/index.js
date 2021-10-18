import "./styles/variation-colors.css"
import ColorCell from "../color-cell";

function VariationColors({name, hue, saturation, lightness}) {

    const numberOfVariations = Array.from({ length: 10 }, (_, i) => i + 1);

	function harmonyHue(hue, num) {
		let newHue = Number(hue) + Number(num);

		if (newHue > 360) {
			newHue = Number(newHue) - Number(360);
		}
		return newHue;
	}

    return (
			<section class="colors-section" id={name}>
				<h2 className="title">{name}</h2>
				<div className="colors-container">
					{name !== "Harmonies"
						? numberOfVariations.map((n) => (
								<ColorCell
									key={n}
									name={name}
									n={n}
									hue={hue}
									saturation={saturation}
									lightness={lightness}
								/>
						  ))
						: ""}
					{name === "Harmonies" ? (
						<>
							<h4>Complimentary</h4>
							<ColorCell
								name={name}
								hue={hue}
								saturation={saturation}
								lightness={lightness}
							/>

							<ColorCell
								name={name}
								hue={harmonyHue(hue, 180)}
								saturation={saturation}
								lightness={lightness}
							/>

							<h4>Analogous</h4>
							<ColorCell
								name={name}
								hue={hue}
								saturation={saturation}
								lightness={lightness}
							/>

							<ColorCell
								name={name}
								hue={harmonyHue(hue, 30)}
								saturation={saturation}
								lightness={lightness}
							/>

							<ColorCell
								name={name}
								hue={harmonyHue(hue, 60)}
								saturation={saturation}
								lightness={lightness}
							/>

							<h4>Triadic</h4>
							<ColorCell
								name={name}
								hue={hue}
								saturation={saturation}
								lightness={lightness}
							/>

							<ColorCell
								name={name}
								hue={harmonyHue(hue, 120)}
								saturation={saturation}
								lightness={lightness}
							/>

							<ColorCell
								name={name}
								hue={harmonyHue(hue, 240)}
								saturation={saturation}
								lightness={lightness}
							/>

							<h4>Split-Complimentary</h4>
							<ColorCell
								name={name}
								hue={hue}
								saturation={saturation}
								lightness={lightness}
							/>

							<ColorCell
								name={name}
								hue={harmonyHue(hue, 150)}
								saturation={saturation}
								lightness={lightness}
							/>

							<ColorCell
								name={name}
								hue={harmonyHue(hue, 210)}
								saturation={saturation}
								lightness={lightness}
							/>

							<h4>Square</h4>
							<ColorCell
								name={name}
								hue={hue}
								saturation={saturation}
								lightness={lightness}
							/>

							<ColorCell
								name={name}
								hue={harmonyHue(hue, 90)}
								saturation={saturation}
								lightness={lightness}
							/>

							<ColorCell
								name={name}
								hue={harmonyHue(hue, 180)}
								saturation={saturation}
								lightness={lightness}
							/>

							<ColorCell
								name={name}
								hue={harmonyHue(hue, 270)}
								saturation={saturation}
								lightness={lightness}
							/>

							<h4>Rectangular</h4>
							<ColorCell
								name={name}
								hue={hue}
								saturation={saturation}
								lightness={lightness}
							/>

							<ColorCell
								name={name}
								hue={harmonyHue(hue, 60)}
								saturation={saturation}
								lightness={lightness}
							/>

							<ColorCell
								name={name}
								hue={harmonyHue(hue, 180)}
								saturation={saturation}
								lightness={lightness}
							/>

							<ColorCell
								name={name}
								hue={harmonyHue(hue, 240)}
								saturation={saturation}
								lightness={lightness}
							/>
						</>
					) : (
						""
					)}
				</div>
			</section>
		);
}

export default VariationColors