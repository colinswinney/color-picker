import { useState, useEffect } from "react"
import TextToCopy from "../text-to-copy";
import "./styles/nav.css"

function Nav({color}) {

    const [scroll, setScroll] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            setScroll(window.scrollY > 50);
        });
    }, []);
    
    return (
			<nav className={scroll ? "nav scrolled" : "nav"}>
				<div className="container">
					<ul class="menu">
						<li className="menu-item">
							<a href="/hsl-color-picker/#App">HSL</a>
						</li>
						<li className="menu-item">
							<a href="/hsl-color-picker/#Shades">Shades</a>
						</li>
						<li className="menu-item">
							<a href="/hsl-color-picker/#Tints">Tints</a>
						</li>
						<li className="menu-item">
							<a href="/hsl-color-picker/#Harmonies">Harmonies</a>
						</li>
						<li className="menu-item">
							<a href="/hsl-color-picker/#Preview">Preview</a>
						</li>
						<li className="menu-item">
							<TextToCopy clipboardText={color} btnTitle={`Copy: ${color}`}>
								{color}
							</TextToCopy>
							<span
								style={{ backgroundColor: color }}
								className="swatch"
							></span>
						</li>
					</ul>
				</div>
			</nav>
		);
}

export default Nav