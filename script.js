let btn=document.querySelector("button");
let ul=document.querySelector("ul");
let inp=document.querySelector("input");

btn.addEventListener("click",function(){
    let item=document.createElement("li");
    item.innerText=inp.value;
    inp.value="";
    
    let dlt=document.createElement("button");
    dlt.innerText="delete";
    ul.appendChild(item);
    item.appendChild(dlt);
    dlt.classList.add("delete");
});

ul.addEventListener("click",function(event){
    if(event.target.nodeName=="BUTTON"){
        let b=event.target.parentElement;
        b.remove();
    }
});