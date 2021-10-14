import "./styles/variation-colors.css"

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

    function returnBasedOnName(name, lightness, n) {
        if (name === "Shades") {
            return findNewShade(lightness, n)
        }
        else if (name === "Tints") {
            return findNewTint(lightness, n)
        }
    }

    return (
			<>
				<h2 className="title">{name}</h2>
				<div className="color-grid">
					{numberOfVariations.map((n) => (
						<div key={n} className="color-cell">
							<div
                                className="color-cell-top"
								style={{
									height: 100 + "px",
									backgroundColor: returnBasedOnName(name, lightness, n),
								}}
							></div>
							<p>{returnBasedOnName(name, lightness, n)}</p>
						</div>
					))}
				</div>
			</>
		);
}

export default VariationColors