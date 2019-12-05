/* eslint-disable */
import '../../common/css/base.less';
import './parents.less'
import '../../common/js/header'
import '../../common/js/footer'

import no_remember from '../../images/header/remmber.png'
import remember from '../../images/header/remmbersel.png'


document.querySelector("#btn_sign").onclick = function () {
    var email = document.querySelector("#txt_email").value;
    submitEmail({ email: email }, function () {
        setTimeout(function () {
            location.href = './signup.html';
        }, 2000);
    }, function (err) {
        console.log(err);
    });
}
