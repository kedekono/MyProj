// JavaScript source code
function predict() {
    var age = $("#age").val();
    var Medu = $("#Medu").val();
    var Fedu = $("#Fedu").val();
    var Mjob = $("#Mjob").val();
    var studytime = $("#studytime").val();
    var failures = $("#failures").val();
    var goout = $("#goout").val();

    $.ajax({
        url: "http://127.0.0.1:5000/Predict",
        type: "POST",
        contentType: "application/json",
        data: JSON.stringify({
            age: age,
            Medu: Medu,
            Fedu: Fedu,
            Mjob: Mjob,
            studytime: studytime,
            failures: failures,
            goout: goout
        }),
        success: function (result) {
            $("#output").text("Your Grade: " + result['prediction']);
        }
    });
}