// fill in javascript code here

const form = document.querySelector("form");
const table = document.querySelector("table");
const tbody =document.querySelector("tbody");

//-------------------- create function to know role on exp base ----------------------------

function role(r){
    if(Number(r > 5)){
        return "Senior"
    }
    else if(Number(r<= 1)){
        return "Trainee"
    }
    else{
        return "Junior"    
    }
}

//--------------------  create function for get form data -------------------------------

function getData(e){
    e.preventDefault();
    let importData = {
        name : document.getElementById("name").value,
        docID : document.getElementById("docID").value,
        dept : document.getElementById("dept").value,
        exp : document.getElementById("exp").value,
        email : document.getElementById("email").value,
        mbl : document.getElementById("mbl").value,
    };

    // ---------------- return emportData object value in table form on tr --------------------------------

    return  tbody.innerHTML += `
    <tr>
        <th>${importData.name}</th>
        <th>${importData.docID}</th>
        <th>${importData.dept}</th>
        <th>${importData.exp}</th>
        <th>${importData.email}</th>
        <th>${importData.mbl}</th>
        <th>${role(importData.exp)}</th>
        <th><button class="delete_btn" >Delete</button></th>
        
    </tr>
    `
}
// ---------------- create delete button function for delete row -----------------------

function onDelete(e){
    if (!e.target.classList.contains("delete_btn")) {
        return;
    }
    const btn = e.target;
    btn.closest("tr").remove();
}

// ------------------------- *************************** ----------------------------------

form.addEventListener("submit", getData);
table.addEventListener("click" , onDelete);