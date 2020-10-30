
function submit(){
    var inputvalue = document.getElementById("inputbar").value;
    var item = document.createElement("li");
        item.innerHTML = inputvalue;
    document.getElementById("ul").appendChild(item);  // append înseamnă atașare // elementul li trebuie să fie imbricat (atașat) sub elementul ul pentru a funcționa

//buton creat pentru a sterge un element 
    var button = document.createElement("button");
        item.appendChild(button);
        button.innerHTML="Clear";
        button.id ="button";
//buton functie de a sterge elemente scrise in  ul - li
    button.onclick = function clear(){
        item.removeChild(button);
        document.getElementById("ul").removeChild(item);
    }
    
}
function deleteAll(){
    document.getElementById("ul").innerHTML = '';
}