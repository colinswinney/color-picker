import "./styles/footer.css"

function Footer({color}) {
    return (
			<footer className="footer">
				<small>
					Created by <a style={{borderColor: color}} href="https://colinswinney.com">Colin Swinney</a>
				</small>
			</footer>
		);
}

export default Footer