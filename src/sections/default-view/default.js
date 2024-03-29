import * as module from '../../utils/shared.js'
import { debugDefault } from './debug_default.js'
let flag = false;
let defaultDOM = {};
let defaultViewLoaded = new module.BooleanListener;
let createDefaultDOM = () => {
	createDOM(
		defaultDOM, 
		false,
		"#quote-1",
		"#quote-2",
		"#quote-3",
		".default__tasking-body"
	)
}
let loadDefaultCSS = () => {
	module.loadCSS(true, "default-css", "sections/default-view/default.css")
}
defaultViewLoaded.addEventListenerT(createDefaultDOM);
defaultViewLoaded.addEventListenerT(loadDefaultCSS);
defaultViewLoaded.addEventListenerT(debugDefault);
flag ?
fetch('http://localhost:5000/default/', {method: 'post'})
.then(response => {
	if (!response.ok) {
		throw new Error("Error en la Solicitud Default View" + response.status)
	}
	return response.json();
})
.then(data => {
	let defaultSection = document.createElement("section");
	defaultSection.classList.add("default-section", "section");
	mainDOM[".main"].appendChild(defaultSection);
	defaultSection.innerHTML = data;
	defaultViewLoaded.onChange(true);
})
.catch(error => {
	console.log('Se produjo un error: ' + error); 
}) : console.log("default view not executed");
