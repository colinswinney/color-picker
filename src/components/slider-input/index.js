function SliderInput ({ name, max, value, onSliderChange }) {

	function createLabel(name, value) {
		if (name === "hue") {
			return "H: " + value
		}
		else if (name === "saturation") {
			return "S: " + value
		}
		else if (name === "lightness") {
			return "L: " + value
		}
	}

	return (
		<>
			<label htmlFor={name}>{createLabel(name, value)}</label>
			<input
				input
				name={name}
				type="range"
				min="0"
				max={max}
				step="1"
				value={value}
				onChange={onSliderChange}
			/>
		</>
	);
};

export default SliderInput;