

const buttonEl = document.querySelector("#input-btn");
let myLead=[];
const inputEl=document.querySelector("#input-el");
const ulEl=document.querySelector("#ul-el");


buttonEl.addEventListener("click",function (){
    myLead.push(inputEl.value);
    inputEl.value="";
    renderLeads();
});

function renderLeads() {
    let listItems = "";
    for (let i = 0; i < myLead.length; i++) {
        listItems += `
            <li>
                <a target='_blank' href='${myLead[i]}'>
                    ${myLead[i]}
                </a>
            </li>
        `
    }
    ulEl.innerHTML = listItems;
}


