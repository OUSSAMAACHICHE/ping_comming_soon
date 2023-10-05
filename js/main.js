// dom elements 
const form = document.forms[0],
input = document.getElementById('email');

// error msg border red and show erro msg 
function createErrorMsg() {
	
	let error = document.createElement('small');
	error.className = 'error';

	error.appendChild(document.createTextNode('Please provide a valid email address'));

	// style error message
	error.style.cssText = 'color: hsl(354, 100%, 66%); font-size: .7rem; position: absolute; top: 40px; left: 30%;';

	form.appendChild(error);

	input.style.borderColor = ' hsl(354, 100%, 66%)';

}

function isValid() {

	let inputValue = input.value.trim();

	let inValid = inputValue == '' || inputValue.includes('.') !== true || inputValue.includes('@') !== true;

	 return inValid;

}
console.log(isValid())

form.addEventListener('submit', (e) => {

	if(isValid()) {
		e.preventDefault();
		createErrorMsg();
	} 

})