let tbody = document.querySelector("tbody")
axios.get("https://northwind.vercel.app/api/suppliers")
    .then(res => {
        res.data.forEach(element => {
        if(element.address.country != undefined){
            tbody.innerHTML +=  ` 
            <tr>
                <th>${element.id}</th>
                <td>${element.companyName}</td>
                <td>${element.contactName}</td>
                <td>${element.address.country}</td>
                <td>
                    <a href="/view.html"><button class="btn btn-primary" myview = "${element.id}"><i class="fa-solid fa-eye"></i></button></a>
                    <a href="/edit.html"><button class="btn btn-warning" myedit = "${element.id}"><i class="fa-solid fa-wrench"></i></button></a>
                    <a href="#"><button class="btn btn-danger" mydelete = "${element.id}"><i class="fa-solid fa-trash"></i></button></a>
                </td>
            </tr>`
        }
    });
    let view = document.querySelectorAll(".btn-primary")
    let edit = document.querySelectorAll(".btn-warning")
    let deletebtn = document.querySelectorAll(".btn-danger")
    deletebtn.forEach(element => {
        element.addEventListener("click",function(e){
            e.preventDefault()
            res.data.forEach(ele =>{
                if(element.getAttribute("mydelete") == ele.id){
                    axios.delete(`https://northwind.vercel.app/api/suppliers/${ele.id}`).then(res =>console.log(res))
                    element.parentElement.parentElement.parentElement.remove()

                }
            })
        })
    });
    view.forEach(element =>{
        element.addEventListener("click",function(){
            res.data.forEach(ele =>{
                if(element.getAttribute("myview") == ele.id){
                    sessionStorage.setItem("View",JSON.stringify(ele))
                }
            })
        })
     });
     edit.forEach(element =>{
        element.addEventListener("click",function(){
            res.data.forEach(ele =>{
                if(element.getAttribute("myedit") == ele.id){
                    sessionStorage.setItem("Edit",JSON.stringify(ele))
                }
            })
        })
     })
    })

