var ul=document.getElementById("list");


document.getElementById("add").addEventListener("click",addItem);

document.getElementById("remove").addEventListener("click",removeItem);

function removeItem(){
    let li=ul.children;
    for(let i=0;i<li.length;i++)
    {
        console.log(li[i].children[0]);
        if(li[i].children[0].checked)
            ul.removeChild(li[i]);
    }
}

function addItem(){
    let inputText=document.querySelector("input").value;
    let textNode=document.createTextNode(inputText);
    var checkbox=document.createElement("input");
    checkbox.type="checkbox";
    var label=document.createElement("label");
    label.appendChild(textNode);
    let li=document.createElement("li");
    li.setAttribute("class","check");
    li.appendChild(checkbox);
    li.appendChild(label);
    ul.insertBefore(li,ul.childNodes[0]);
    setTimeout(()=>{
        li.className="visual";
    },5);
    document.querySelector("input").value="";
}