// JavaScript source code
function predict() {
    var failures = $("#failures").val();
    var Medu = $("#Medu").val();
    var Mjob = $("#Mjob").val();
    var schoolsup = $("#schoolsup").val();
    var Fedu = $("#Fedu").val();
    var age = $("#age").val();
    var Walc = $("#Walc").val();
    var higher = $("#higher").val();
    var goout = $("#goout").val();
    var absences = $("#absences").val();
    var address = $("#address").val();
    var studytime = $("#studytime").val();
    var Dalc = $("#Dalc").val();
    var internet = $("#internet").val();
    var sex = $("#sex").val();
    var school = $("#school").val();

    // 检查输入是否为空
    if (absences === "") {
        alert("请输入缺席次数");
        return false; // 阻止继续操作页面
    }

    // 使用正则表达式验证输入是否为整数
    var isInteger = /^\d+$/.test(absences);

    if (!isInteger) {
        alert("请输入一个整数");
        return false; // 阻止继续操作页面
    }

    // 验证范围
    if (absences < 0 || absences > 93) {
        alert("请输入范围内的缺勤次数，超过93次按93次算。");
        return false;
    }

    $.ajax({
        url: "http://127.0.0.1:5000/Predict",
        type: "POST",
        contentType: "application/json",
        data: JSON.stringify({
            failures: failures,
            Medu: Medu,
            Mjob: Mjob,
            schoolsup: schoolsup,
            Fedu: Fedu,
            age: age,
            Walc: Walc,
            higher: higher,
            goout: goout,
            absences: absences,
            address: address,
            studytime: studytime,
            Dalc: Dalc,
            internet: internet,
            sex: sex,
            school: school
        }),
        success: function (result) {
            $("#output").text("Your Grade: " + result['prediction']);
        }
    });
}