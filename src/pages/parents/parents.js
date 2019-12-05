/* eslint-disable */
import 'amfe-flexible'
import '../../common/css/base.less';
import './parents.less'
import '../../common/js/header'
import '../../common/js/footer'

import no_remember from '../../images/header/remmber.png'
import remember from '../../images/header/remmbersel.png'

function sign() {
    var email = document.querySelector('#txt_email');
    console.log(email.value);
    location.href = "/signup.html";
}

document.querySelector("#btn_sign").onclick = sign;
