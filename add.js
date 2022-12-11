let compName = document.querySelector(".cmpname")
let contName = document.querySelector(".cntname")
let country = document.querySelector(".country")
let submit = document.querySelector("button")

submit.addEventListener("click",function(e){
    e.preventDefault()
    if(compName.value.trim()!="" && contName.value.trim()!="" && country.value.trim()!=""){
        axios.post("https://northwind.vercel.app/api/suppliers",{
            companyName : `${compName.value}`,
            contactName : `${contName.value}`,
            address : {
                country : `${country.value}`
            }
        }).then(res =>{
            console.log(res);
        })
    }
    else{
        alert("PLease fill the inputs!!!")
    }

    compName.value = ""
    contName.value = ""
    country.value = ""

})


