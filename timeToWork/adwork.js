//Item Grundlage <li><span>ABC</span></li>

var newItem = document.getElementById("add_button");
newItem.onclick = function () {
    var eingtext = document.getElementById("inItemText").value;
    if (eingtext == "" | !eingtext)
    {
        return; 
    }
    addItem(document.getElementById("zeiten"), eingtext)
};


function addItem(liste, eingtext)
{
    var neuesitem = document.createElement("li");
    neuesitem.innerText = eingtext;

    liste.appendChild(neuesitem);

}