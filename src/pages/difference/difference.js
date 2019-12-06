/* eslint-disable */
import '../../common/css/base.less';
import './difference.less'
import '../../common/js/header'
import '../../common/js/footer'

var node = document.querySelector('.trustpilot-widget').parentNode;
document.querySelector('#trustBox').innerHTML = node.innerHTML;
node.remove();