import "./styles/slider-input.css"

function SliderInput ({ name, max, value, onSliderChange }) {

	function createLabel(name, value) {
		if (name === "hue") {
			return "H: " + value
		}
		else if (name === "saturation") {
			return "S: " + value + "%"
		}
		else if (name === "lightness") {
			return "L: " + value + "%"
		}
	}

	return (
		<div className="slider-group">
			<label className="slider-label" htmlFor={name}>{createLabel(name, value)}</label>
			<input
				className="slider-input"
				name={name}
				type="range"
				min="0"
				max={max}
				step="1"
				value={value}
				onChange={onSliderChange}
			/>
		</div>
	);
};

export default SliderInput;