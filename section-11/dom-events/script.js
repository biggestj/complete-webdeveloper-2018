const button = document.getElementById("enter");
const input = document.getElementById("userinput");
const ul = document.querySelector("ul");
const listItem = ul.getElementsByTagName("li");
const remove = document.querySelector("remove");

const inputLength = () => {
	return input.value.length;
}

const createListElement = () => {
	// Create a new list item
	let li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";
	// add remove button to the end of the list item

}

const addListAfterClick = () => {
	if (inputLength() > 0){
		createListElement();
	}
}

const addListAfterKeypress = (e) => {
	if (inputLength() > 0 && e.which === 13){
		createListElement();
	}
}

button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);
ul.addEventListener("click", done);
