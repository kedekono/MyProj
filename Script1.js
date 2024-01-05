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

    // ��������Ƿ�Ϊ��
    if (absences === "") {
        alert("������ȱϯ����");
        return false; // ��ֹ��������ҳ��
    }

    // ʹ��������ʽ��֤�����Ƿ�Ϊ����
    var isInteger = /^\d+$/.test(absences);

    if (!isInteger) {
        alert("������һ������");
        return false; // ��ֹ��������ҳ��
    }

    // ��֤��Χ
    if (absences < 0 || absences > 93) {
        alert("�����뷶Χ�ڵ�ȱ�ڴ���������93�ΰ�93���㡣");
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