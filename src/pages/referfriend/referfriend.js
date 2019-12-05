/* eslint-disable */
import '../../common/css/base.less';
import './referfriend.less'
import '../../common/js/header'
import '../../common/js/footer'

function sign() {
    var email = document.querySelector('#txt_email');
    console.log(email.value);
    submitEmail({email:email});
    location.href = "/signup.html";
}

document.querySelector("#btn_sign").onclick = sign;