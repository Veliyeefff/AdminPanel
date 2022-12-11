let edit = JSON.parse(sessionStorage.getItem("Edit"))
console.log(edit);
let compName = document.querySelector(".cmpname")
let contName = document.querySelector(".cntname")
let country = document.querySelector(".country")
let editbtn = document.querySelector("button")

compName.value = edit.companyName
contName.value = edit.contactName
country.value = edit.address.country

editbtn.addEventListener("click",function(){
    axios.put(`https://northwind.vercel.app/api/suppliers/${edit.id}`,{
        companyName : `${compName.value}`,
        contactName : `${contName.value}`,
        address : {
            country : `${country.value}`
        }
    }).then(res=>console.log(res))

    compName.value = ""
    contName.value = ""
    country.value = ""
})
