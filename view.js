let details = JSON.parse(sessionStorage.getItem("View"))
console.log(details);
let companyName = document.querySelector(".companyName")
let contactName = document.querySelector(".contactName")
let contactTitle = document.querySelector(".contactTitle")
let country = document.querySelector(".country")

companyName.innerText = details.companyName
contactName.innerText = details.contactName
contactTitle.innerText = details.contactTitle
country.innerText = details.address.country

