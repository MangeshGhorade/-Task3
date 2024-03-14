let btn = document.querySelector("button");
let inp = document.querySelector("#task");
let ol = document.querySelector("ol");

btn.addEventListener("click",()=>{
    let task = document.createElement("li");
    task.innerText = inp.value;

    let delBtn = document.createElement("button");
    delBtn.classList.add("delete");
    delBtn.innerText = "Delete";
    delBtn.style.borderRadius = "5px";
    delBtn.style.marginLeft = "1rem";
    delBtn.style.backgroundColor = "brown";
    delBtn.style.padding = "4px";
    delBtn.style.cursor = "pointer";
    task.style.marginTop = "5px";
    task.style.marginLeft = "4rem";
    task.appendChild(delBtn);
    ol.appendChild(task);
    inp.value = "";
});

ol.addEventListener("click",function(event){
    if(event.target.nodeName=="BUTTON"){
         let ListItem = event.target.parentElement;
         ListItem.remove();
    }
});