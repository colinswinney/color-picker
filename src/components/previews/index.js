import { useState } from "react";
import PreviewWindow from "../preview-window";
import "./styles/previews.css"

function Previews({color}) {

    const [userText, setUserText] = useState("");

    function handleUserTextChange(e) {
        setUserText(e.target.value)
    }

    const light = "hsl(0, 0%, 99%)"
    const dark = "hsl(0, 0%, 7%)"

    return (
			<aside>
				<h2 class="title">Preview</h2>
				<p>View your selection against light and dark text or backgrounds.</p>
				<small>Light = hsl(0, 0%, 99%)<br/>Dark = hsl(0, 0%, 7%)</small>
				<br />
				<label htmlFor="heading" className="text-label">
					Heading
				</label>
				<input
					className="text-input"
					name="heading"
					type="text"
					value={userText}
					placeholder="Type something"
					onChange={handleUserTextChange}
				/>
				<div className="section-wrap">
					<section>
						<PreviewWindow
							bgColor={color}
							textColor={light}
							userText={userText}
						/>
						{/* <p className="description">Light Text on Color Background</p> */}
					</section>
					<section>
						<PreviewWindow
							bgColor={light}
							textColor={color}
							userText={userText}
						/>
						{/* <p className="description">Color Text on Light Background</p> */}
					</section>
					<section>
						<PreviewWindow
							bgColor={color}
							textColor={dark}
							userText={userText}
						/>
						{/* <p className="description">Dark Text on Color Background</p> */}
					</section>
					<section>
						<PreviewWindow
							bgColor={dark}
							textColor={color}
							userText={userText}
						/>
						{/* <p className="description">Color Text on Dark Background</p> */}
					</section>
				</div>
			</aside>
		);
}

export default Previews