import "./styles/preview-window.css"

function PreviewWindow({textColor, bgColor, userText}) {

    const styles = {
        color: textColor,
        backgroundColor: bgColor
    }
    return (
			<div style={styles} className="preview-window">
				<h2>{userText ? userText : "HSL is the best thing ever"}</h2>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. In et ipsum
					vel lorem posuere interdum ultricies sed lectus. Aliquam bibendum
					sapien ac elit ultricies egestas. Suspendisse sagittis vel magna at
					finibus. Phasellus interdum arcu et ornare dapibus. 
				</p>
			</div>
		);
}

export default PreviewWindow