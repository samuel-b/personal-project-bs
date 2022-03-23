//Creates a new date object
const currentYear = new Date
//Uses a method to get the current year from the date object and updates the footer
document.querySelector(".footer-year").innerHTML = "© " + currentYear.getFullYear() + " Samuel Brooker"

//Contact Page - Email click to copy

const contactEmail = document.querySelector("#contactEmail");

contactEmail.addEventListener("click", () => {
  const emailAddress = "email@email.com"
  navigator.clipboard.writeText(emailAddress)
  contactEmail.firstChild.data = "Email (Copied)"
})