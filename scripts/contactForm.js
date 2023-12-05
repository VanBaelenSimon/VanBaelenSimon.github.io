const subject = document.getElementById("subject");
const spanSubject = document.getElementById("span-subject");

let fname = document.getElementById("fname");
let phoneNumb = document.getElementById("phone");
let email = document.getElementById("email");

// const email = document.getElementById("email");
// const spanEmail = document.getElementById("span-email");

const sendButton = document.getElementById("button-send");
const clearButton = document.getElementById("button-clear");
function subjectCheck() {
  if (subject.value !== "") {
    spanSubject.classList.add("span-highlight");
    subject.classList.add("input-border");
  } else {
    spanSubject.classList.remove("span-highlight");
    subject.classList.remove("input-border");
  }
}
function sendForm() {
  if (fname.value !== "" && email.value !== "" && subject.value !== "") {
    const contactData = {
      firstName: fname.value,
      numberNumber: phoneNumb.value,
      emailAddress: email.value,
      message: subject.value,
    };
    console.log(contactData);
    sendMail(contactData);
    // clearForm();
  } else {
    console.log("Required input fields are not valid");
  }
}
function clearForm() {
  // getData();
  fname.value = "";
  phoneNumb.value = "";
  email.value = "";
  subject.value = "";

  subjectCheck();
}
function sendMail(contactData) {
  window.location.href =
    "mailto:simonvanbaelen24@gmail.com?subject=Contact Mail From Website&body=" +
    contactData.message;
}
