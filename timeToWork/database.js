var db;

var butt = document.getElementById('startbutton');
if (butt != null)
{
    butt.onclick = onDeviceReady;
}

function onDeviceReady()
{
    window.location = "login.html";
}


/*function onDeviceReady() {
    db = window.openDatabase("Database", "1.0", "Cordova Demo", 2 * 1024 * 1024);
    db.transaction(createDB, errorCB);
    alert("Ready");

}

function createDB(tx) {
    tx.executeSql('CREATE TABLE IF NOT EXISTS TDurchfuerungen (id integer primary key autoincrement, date datum, time zeit, status)');
    alert("Database created");
    window.location = 'neuereintrag.html'

}

function errorCB(err) {
    alert("Error processing SQL: " + err.code);
}

function insertDB(tx) {
    /*var _title = $("[name='title']").val();
    var _image = $("[name='image']").val();
    var _description = $("[name='description']").val();
    var datum = document.getElementById("inItemDate").textContent;*/
    /*var zeit = document.getElementById("inItemTime").textContent;;
    var ein = "ein";
    var sql = "INSERT INTO TDurchfuerungen (date, time, status) VALUES (?,?,?)";
    tx.executeSql(sql,[datum, zeit, ein], sucessQueryDB, errorCB);

}

function sucessQueryDB(tx) {
    // tx.executeSql('SELECT * FROM DEMO', [], renderList, errorCB);
    alert("Insert war erfolgreich");
}

function renderList(tx, results) {
    


}*/

