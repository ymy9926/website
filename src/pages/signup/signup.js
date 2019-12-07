/* eslint-disable */
import '../../common/css/base.less';
import './signup.less'
import '../../common/js/header'
import '../../common/js/footer'

document.querySelector(".register").onclick = showRegister;
document.querySelector(".register2").onclick = showRegister;
var node = document.querySelector('.trustpilot-widget').parentNode;
document.querySelector('#trustBox').innerHTML = node.innerHTML;
node.remove();
