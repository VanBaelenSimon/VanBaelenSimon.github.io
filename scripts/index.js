// tabSwitcher.js

function hideOtherTabs(tabList, tab, tabPrefix) {
  for (let index = 0; index < tabList.length; index++) {
    if (tabPrefix + tab !== tabPrefix + tabList[index]) {
      //check to see which tabs are
      document.getElementById(tabPrefix + tabList[index]).style.display =
        "none";
      document.getElementById(tabList[index]).classList.remove("active");
    }
  }
}

document.addEventListener("DOMContentLoaded", function () {
  let tabPrefix = "home-";
  let tabs = ["tab1", "tab2", "tab3"];

  //clear all active pages
  for (let index = 0; index < tabs.length; index++) {
    document.getElementById(tabPrefix + tabs[index]).style.display = "none";
  }
  //set default active page
  document.getElementById("home-tab2").style.display = "block";

  //check which element the click event occurs on, display to block
  const tabLinks = document.querySelectorAll("ul.tab-links li");
  tabLinks.forEach(function (tabLink) {
    tabLink.addEventListener("click", function () {
      let tabID = this.id;
      document.getElementById(tabPrefix + tabID).style.display = "block";
      document.getElementById(tabID).classList.add("active");
      // hide all other tabs
      hideOtherTabs(tabs, tabID, tabPrefix);
    });
  });
});

// scrollTop.js

const arrowUp = document.getElementById("arrow-up");
const arrowDown = document.getElementById("arrow-down");
const secondPage = document.getElementById("about");
const firstPage = document.getElementById("homepage");
arrowUp.addEventListener("click", () => {
  firstPage.scrollIntoView({
    behavior: "smooth",
  });
});
arrowDown.addEventListener("click", () => {
  secondPage.scrollIntoView({
    behavior: "smooth",
  });
});

// preloader.js

window.addEventListener("load", () => {
  setTimeout(function () {
    const loader = document.querySelector(".preloader");
    loader.classList.add("preloader--hidden");
  }, 1000);
});

// contactForm.js

const subject = document.getElementById("subject");
const spanSubject = document.getElementById("span-subject");
let fname = document.getElementById("fname");
let phoneNumb = document.getElementById("phone");
let email = document.getElementById("email");
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
    clearForm();
  } else {
    console.log("Required input fields are not valid");
  }
}
function clearForm() {
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
