window.onload = function () {
    console.log('run ok');

    for (var i = 0; i < getnumberofitemsbyid("synchdata_") ; i++) {
        var str = localStorage.getItem("synchdata_" + i);
        console.log(localStorage.getItem("synchdata_" + i));
        var obj = JSON.parse(str);

        var date = obj.date;
        var time = obj.time;
        //var email = localStorage.getItem("email");
        var email = hallo;
        var art = obj.art;
        $.ajax({
            type: 'POST',
            dataType: 'JSON',
            url: 'synchfunc.php',
            data: { email: email, time: time, date: date, art: art },
            beforeSend: function () {

            },
            success: function (data) {
                
                
            },
            error: function (xhr) {
                console.log(xhr);
            },
            complete: function () {
            }
        });

        

    }
    //Delete Synch Zwischenspeicher//
    for (var i = 0; i < getnumberofitemsbyid("synchdata_") ; i++) {
        localStorage.removeItem("synchdata_" + 1);
    }
    
    for (var i = 0; i < getnumberofitemsbyid("daten_") ; i++) {
        localStorage.removeItem("daten_" + 1);
    }
    //

    //Frage Anzahl der Datensätze des Benutzers ab//
    $.ajax({
        type: 'POST',
        dataType: 'JSON',
        url: 'synchfunc.php',
        data: { email: email },
        beforeSend: function () {

        },
        success: function (data) {
            //Daten aus DB einfügen
            for (var i2 = 0; i2 < data.length; i2++) {
                var i = 0 + 0;
                while (true) {
                    if ((localStorage.getItem("daten_" + i) == null && i == 0) | (localStorage.getItem("daten_" + i) == null && localStorage.getItem("daten_" + (i - 1)) != null)) {
                        console.log(1);
                        break;
                    }
                    i++;
                }
                var name = "daten_" + i;
                var data = {
                    'date': date,
                    'time': time
                }
                console.log(name, data);
                localStorage.setItem(name, JSON.stringify(data));
            }
            

        },
        error: function (xhr) {
            console.log(xhr);
        },
        complete: function () {
        }
    });

    

    //



    window.location = "index.html";
}