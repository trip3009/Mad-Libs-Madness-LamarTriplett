/* Given the 'id' attribute of a form element, 
   this will return the value entered by the user 
	 into that form element. */

// the formValue varible (parameter🛂) takes the data then passes data to the "form values" below.
function formValue(id) {
  // Get the input from the form on HTML page. 
  let formElement = document.getElementById(id);
  // the line above is saying, "hey I got an argument." It's then passes data from the formELement to the parameter.
  
  // If the element is referenced but isn't there it will return "NOT FOUND".
  if (formElement === null) {
    return `[${id} NOT FOUND]`;
  }

  let value = formElement.value;

	// If no data is entered, then the system will display placeholder.
  if (formElement.value.trim() === "") {
    return `[${formElement.placeholder}]`;
  }

  return value;
}

/* Given the 'id' of an HTML element and a 
   'className', this will add that class to
   the HTML element. */
function addClassToElement(id, className) {
  let element = document.getElementById(id);
  element.classList.add(className);
}

/* The code here will be executed each time
   that the form button is clicked. */
function generate() {

  
  // console.log("button clicked.");
  // console.log("hello");
  
//Retrieve form values
let relative = formValue("relative"); 
let adjective1 = formValue("adjective-1");
let adjective2 = formValue("adjective-2");
let adjective3 = formValue("adjective-3");
let famousPerson = formValue("famous_person");
let noun = formValue("noun");
let dessert = formValue("dessert");
let petName = formValue("pet_name");
  
  console.log(relative);
   //Insert form values into madlab
  let madLab = `
 Dear ${relative},
  <br><br>
  I have been having a really ${adjective1} time 
  at camp. The counselour is ${adjective2} and 
  the food is ${adjective3}. I met ${famousPerson} 
  and we quickly became ${noun}. Talk soon!
  <br><br>
  Your ${dessert},
  <br>
  ${petName}
`;
  console.log(madLab);
  //output the madlab to the player.
  document.getElementById("output").innerHTML=madLab
  document.getElementById("form").style.display="none"


  
 
}