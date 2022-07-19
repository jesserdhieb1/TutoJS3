

const buttonEl = document.querySelector("#input-btn");
let myLead=["www.awesomelead.com", "www.epiclead.com", "www.greatlead.com"];
const inputEl=document.querySelector("#input-el");
const ulEl=document.querySelector("#ul-el");


buttonEl.addEventListener("click",function (){
    myLead.push(inputEl.value);
    inputEl.value="";
    console.log(myLead);
});

let listItems="";
for (let i = 0; i<myLead.length; i++){
    // let liEl = document.createElement("li");
    // liEl.textContent=myLead[i];
    // ulEl.append(liEl);
    listItems+="<li>" + myLead[i] + "</li>";
}
ulEl.innerHTML=listItems;


