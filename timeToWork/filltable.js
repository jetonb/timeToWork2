var newItem = document.getElementById("refresh_button");
newItem.onclick = function () {
    console.log("Hallo");
    addItem(document.getElementById("daten"))
};


function addItem(tabelle) {
    console.log(tabelle);
    console.log(getnumberofitemsbyid("daten_"));
    for (var i = 0; i < getnumberofitemsbyid("daten_"); i++) {
        var spalte1 = document.createElement("td");
        var spalte2 = document.createElement("td");
        var spalte3 = document.createElement("button");
        spalte3.class = "btn btn-default col-xs-12 col-sm-12";
        spalte3.id = "b" + i;
        spalte3.onclick = removeitem;
        //Hier Daten aus Datenbank einfügen//
        var str = localStorage.getItem("daten_" + i);
        console.log(localStorage.getItem("daten_" + i));
        var obj = JSON.parse(str);

        spalte1.innerText = reverse(obj.date);
        spalte2.innerText = obj.time;
        spalte3.innerText = "Löschen"
        var neuesitem = document.createElement("tr");
        neuesitem.id = "tr_" + i;
        neuesitem.appendChild(spalte1);
        neuesitem.appendChild(spalte2);
        neuesitem.appendChild(spalte3);

        tabelle.appendChild(neuesitem);
    }

}

function removeitem()
{
    console.log("a");
    var idvonobj = this.id;
    idvonobj = idvonobj.replace("b", "");
    //Delete for Synch
    var name2 = "synchdata_" + idvonobj;
    var data2 = {
        'date': date,
        'time': time,
        'art': xyz
    }

    //

    console.log("id button " +idvonobj)
    console.log("number von daten_ " + getnumberofitemsbyid("daten_"))
    var datenanzahl = getnumberofitemsbyid("daten_");
    datenanzahl--;
    if (idvonobj == (datenanzahl))
    {
        localStorage.removeItem("daten_" + idvonobj);
    }
    for (var i2 = idvonobj; i2 <= datenanzahl ; i2++) {
        console.log("1MalAusgeführt");
        var xy = i2;
        xy = xy++;
        var str = localStorage.getItem("daten_" + xy);
        console.log("str " + str);
        var obj = JSON.parse(str);
        console.log("obj " + obj);
        var savdate = obj.date;
        var savtime = obj.time;
        console.log(savdate);
        console.log(savtime);
        //Remove entry
        localStorage.removeItem("daten_" + i2);
   

        //Insert again//
        var name = "daten_" + i2;
        console.log(3);
        var data = {
            'date': savdate,
            'time': savtime
        }
        console.log(name, data);
        localStorage.setItem(name, JSON.stringify(data));
    }
    localStorage.removeItem("daten_" + datenanzahl);
    
}

function reverse(s) {
    s = s.split("").reverse().join("");
    s = s.replace("-", ".");
    return s.replace("-", ".");
}

function refreshtable()
{
    for (var i = 0; i < getnumberofitemsbyid("tr_") ; i++) {
        //Destroy table
        var el = document.getElementById("tr_" + i);
        el.parentNode.removeChild(el);
    }
    

    //Rebuild table
    addItem(document.getElementById("daten"))
}