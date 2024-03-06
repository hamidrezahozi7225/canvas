import React, { useEffect, useRef, useState } from "react";
import {
	loadCaptchaEnginge,
	LoadCanvasTemplate,
	validateCaptcha,
} from "react-simple-captcha";

export default function Test() {
	const [captcha, setCaptcha] = useState("");

	// Load the captcha engine with a specific number of characters
	useEffect(() => {
		loadCaptchaEnginge(4, "black", "white", "lower");
	}, []);

	const reloadCaptcha = () => {
		// Reload the captcha
		loadCaptchaEnginge(4, "black", "white", "lower");
	};

	const handleSubmit = () => {
		if (validateCaptcha(this.state.captcha)) {
			alert("Captcha Matched");
		} else {
			alert("Captcha Does Not Match");
		}
	};

	return (
		<div style={{ display: "flex", justifyContent: "center" }}>
			<LoadCanvasTemplate reloadText=" " />
			<button onClick={reloadCaptcha}>Reload CAPTCHA</button>
			<input
				placeholder="Enter Captcha Value"
				value={this.state.captcha}
				onChange={(e) => setCaptcha(e.target.value)}
				type="text"
			/>

			{/* <button onClick={handleSubmit}>Submit</button> */}
		</div>
	);
}
