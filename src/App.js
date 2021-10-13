import { useState, useEffect } from 'react'
import './App.css';

function App() {

  const [hue, setHue] = useState(() => {
    const savedHue = localStorage.getItem("hue");

    if (savedHue) {
      return JSON.parse(savedHue)
    }
    else {
      return "50"
    }
  })
  const [saturation, setSaturation] = useState(() => {
		const savedSaturation = localStorage.getItem("saturation");

		if (savedSaturation) {
			return JSON.parse(savedSaturation);
		} else {
			return "50";
		}
	})
  const [lightness, setLightness] = useState(() => {
		const savedLightness = localStorage.getItem("lightness");

		if (savedLightness) {
			return JSON.parse(savedLightness);
		} else {
			return "50";
		}
	})
  const [color, setColor] = useState(() => {
    const savedColor = localStorage.getItem("color")

    if (savedColor) {
      return JSON.parse(savedColor)
    }
    else {
      return `hsl( ${hue}, ${saturation}%, ${lightness}%)`;
    }
  });

  useEffect(() => {
		localStorage.setItem("color", JSON.stringify(color));
    localStorage.setItem("hue", JSON.stringify(hue));
    localStorage.setItem("saturation", JSON.stringify(saturation));
    localStorage.setItem("lightness", JSON.stringify(lightness));
	}, [color, hue, saturation, lightness]);

  function handleHueChange(e) {
    setHue(e.target.value)
    setColor(`hsl( ${e.target.value}, ${saturation}%, ${lightness}%)`);
  }

  function handleSaturationChange(e) {
		setSaturation(e.target.value);
    setColor(`hsl( ${hue}, ${e.target.value}%, ${lightness}%)`);
	}

  function handleLightnessChange(e) {
		setLightness(e.target.value);
    setColor(`hsl( ${hue}, ${saturation}%, ${e.target.value}%)`);
	}

  function hslToHex(h, s, l) {
		l /= 100;
		const a = (s * Math.min(l, 1 - l)) / 100;
		const f = (n) => {
			const k = (n + h / 30) % 12;
			const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
			return Math.round(255 * color)
				.toString(16)
				.padStart(2, "0"); // convert to Hex and prefix "0" if needed
		};
		return `#${f(0)}${f(8)}${f(4)}`;
	}

  function hslToRgb(h,s,l) {
    s /= 100;
    l /= 100;

    let c = (1 - Math.abs(2 * l - 1)) * s,
      x = c * (1 - Math.abs(((h / 60) % 2) - 1)),
      m = l - c / 2,
      r = 0,
      g = 0,
      b = 0;

    if (0 <= h && h < 60) {
      r = c; g = x; b = 0;  
    } else if (60 <= h && h < 120) {
      r = x; g = c; b = 0;
    } else if (120 <= h && h < 180) {
      r = 0; g = c; b = x;
    } else if (180 <= h && h < 240) {
      r = 0; g = x; b = c;
    } else if (240 <= h && h < 300) {
      r = x; g = 0; b = c;
    } else if (300 <= h && h < 360) {
      r = c; g = 0; b = x;
    }
    r = Math.round((r + m) * 255);
    g = Math.round((g + m) * 255);
    b = Math.round((b + m) * 255);

    return "rgb(" + r + "," + g + "," + b + ")";
  }

  const style = {
		backgroundColor: color,
		width: "100%",
		height: "50vh",
	};

  return (
		<div className="app">
			<div style={style} />

			<h1>{color}</h1>

			<form>
				<label htmlFor="hue">H: {hue}</label>
				<input
					name="hue"
					type="range"
					min="0"
					max="360"
					step="1"
          value={hue}
					onChange={handleHueChange}
				/>
				<label htmlFor="saturation">S: {saturation}</label>
				<input
					name="saturation"
					type="range"
					min="0"
					max="100"
					step="1"
          value={saturation}
					onChange={handleSaturationChange}
				/>
				<label htmlFor="lightness">L: {lightness}</label>
				<input
					name="lightness"
					type="range"
					min="0"
					max="100"
					step="1"
          value={lightness}
					onChange={handleLightnessChange}
				/>
			</form>

			<button onClick={() => navigator.clipboard.writeText(color)}>
				Copy HSL
			</button>

			<button
				onClick={() =>
					navigator.clipboard.writeText(hslToHex(hue, saturation, lightness))
				}
			>
				Copy Hex
			</button>

			<button
				onClick={() =>
					navigator.clipboard.writeText(hslToRgb(hue, saturation, lightness))
				}
			>
				Copy RGB
			</button>
		</div>
	);
}

export default App;
