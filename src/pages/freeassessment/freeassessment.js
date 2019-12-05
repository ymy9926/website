/* eslint-disable */
import 'amfe-flexible'
import '../../common/css/base.less';
import './freeassessment.less'
import '../../common/js/header'
import '../../common/js/footer'

document.querySelector("#btn_sign").onclick = function () {
    var email = document.querySelector("#txt_email").value;
    submitEmail({ email: email }, function () {
        setTimeout(function () {
            location.href = './signup.html';
        }, 3000);
    }, function (err) {
        console.log(err);
    });
}