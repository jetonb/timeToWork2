$(document).ready(function () {
    console.log('run')
});

//Button ist in File neuereintrag.html
var butt = document.getElementById('insert_button');
if (butt != null) {
    butt.onclick = setItem;
}

function setItem() {
    //Für lokales Update
    var date = $('#inItemDate').val();
   
    var time = $('#inItemTime').val();
    var i = 0 + 0;
    console.log(localStorage.getItem("daten_" + i));
    
    while (true) {
        if ((localStorage.getItem("daten_" + i) == null && i == 0) | (localStorage.getItem("daten_" + i) == null && localStorage.getItem("daten_" + (i - 1)) != null)) {
            console.log(1);
            break;
        }
        i++;
    }
    console.log(2);
    var name = "daten_" + i;
    console.log(3);
    var data = {
        'date': date,
        'time': time
    }
    console.log(name, data);
    localStorage.setItem(name, JSON.stringify(data));


    //Für Synchronisation
    i = 0;
    while (true) {
        if ((localStorage.getItem("synchdata_" + i) == null && i == 0) | (localStorage.getItem("synchdata_" + i) == null && localStorage.getItem("synchdata_" + (i - 1)) != null)) {
            console.log(1);
            break;
        }
        i++;
    }

    var name2 = "synchdata_" + i;
    console.log(3);
    var data2 = {
        'date': date,
        'time': time,
        'art': insert
    }
    console.log(name2, data2);
    localStorage.setItem(name2, JSON.stringify(data2));

    //
}

function getnumberofitemsbyid(st)
{
    var i = 0 + 0;
    while (true) {
        if ((localStorage.getItem(st + i) == null && i == 0)  | (localStorage.getItem(st + i) == null  && localStorage.getItem(st + (i - 1)) != null )) {
            console.log(1);
            break;
        }
        i++;
    }
    return i;
}

function getItem() {
    var data = localStorage.getItem(name);
    var name = [];
    for (var i = 0; i < localStorage.length; i++) {
        name[i] = date + '_' + time + '_' + i;
    }
    console.log(data);
}

function checkExistingItem(name) {
    if (localStorage.getItem(name)) {
        return localStorage.length;
    } else {
        return false;
    }
}

function isuserloggedin()
{
    return (localStorage.getItem("email") != null);
}
