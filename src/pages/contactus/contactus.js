/* eslint-disable */
import '../../common/css/base.less';
import './contactus.less'
import '../../common/js/header'
import '../../common/js/footer'

(function () {

    function submit() {
        var form = document.contactus;
        var param = {
            "first_name": form.first_name.value,
            "last_name": form.first_name.value,
            "email": form.email.value,
            "description": form.description.value,
            "phone": form.phone.value,
            "title": form.title.value
        }
        submitEmail(param, function () {
            setTimeout(function () {
                location.href = "/signup.html";
            }, 200);
        });
    }

    function sign() {
        var email = document.querySelector('#txt_email');
        submitEmail({ email: email }, function () {
            setTimeout(function () {
                location.href = "/signup.html";
            }, 200);
        });
    }

    document.querySelector("#btn_submit").onclick = submit;
    document.querySelector("#btn_sign").onclick = sign;
})();