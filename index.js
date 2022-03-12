//Creates a new date object
const currentYear = new Date
//Uses a method to get the current year from the date object and updates the footer
document.querySelector(".footer-year").innerHTML = "© " + currentYear.getFullYear() + " Samuel Brooker"