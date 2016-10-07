function login() {
    console.log('run ok');
    $("#login_button").hide();

    var email = $("#email").val();
    var password = $("#password").val();

    console.log('step 2 ok' + email, password);

    $.ajax({
        type: 'POST',
        dataType: 'JSON',
        url: 'loginfunc.php',
        data: { email: email, password: password },
        beforeSend: function() {

        },
        success: function (data) {
            localStorage.setItem("email", email);
            window.location = "synch.html";
        },
        error: function(xhr) {
            console.log(xhr);
            $("#nachricht").text("Die E-Mail Adresse oder das Passwort ist nicht korrekt.");
        },
        complete: function() {
            //$("#login_button").show();
                localStorage.setItem("email", email);
                window.location = "synch.html";
        }
    });
    /*
    $.post("loginfunc.php", )
    .done(function (data) {
        alert("2");
        if (data == "success") {
            window.location = "index.php";
        }
        else {

        }
    });
    */

}
