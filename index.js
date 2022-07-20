

const buttonEl = document.querySelector("#input-btn");
let myLead=[];
const inputEl=document.querySelector("#input-el");
const ulEl=document.querySelector("#ul-el");
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLead"));
const deleteBtn = document.querySelector("#delete-btn");
if (leadsFromLocalStorage){
    myLead=leadsFromLocalStorage;
    render(myLead);
}

function render(Lead) {
    let listItems = "";
    for (let i = 0; i < Lead.length; i++) {
        listItems += `
            <li>
                <a target='_blank' href='${Lead[i]}'>
                    ${Lead[i]}
                </a>
            </li>
        `
    }
    ulEl.innerHTML = listItems;
}

deleteBtn.addEventListener("dblclick",function (){
    localStorage.clear();
    ulEl.innerHTML ="";
    myLead=[];
})


buttonEl.addEventListener("click",function (){
    myLead.push(inputEl.value);
    inputEl.value="";
    localStorage.setItem("myLead",JSON.stringify(myLead));
    render(myLead);
    console.log(localStorage.getItem("myLead") );
});




