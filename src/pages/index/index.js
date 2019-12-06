/* eslint-disable */
import '../../common/css/base.less';
import './index.less'
import '../../common/js/header'
import '../../common/js/footer'
import imageUrl from '../../images/index/lingoace-bg@x2.jpg'
import videoUrl from '../../images/index/mv-lingoace.mp4'

if (__lgzy == "sg") {
    document.querySelector(".form-warpper").style.display = "none";
}

document.querySelector('video').poster = imageUrl;
document.querySelector('#bgvid').src = videoUrl;
document.querySelector('#bgvid source').src = videoUrl;
// document.querySelector('video').oncanplaythrough = function () {
//     console.log('loading over');
//     //document.querySelector('#bgvid').style.display = 'block';
//     document.querySelector('#video-bg').style.visibility = 'hidden';
// }


document.querySelector("#btn_sg").onclick = function () {
    window.localStorage.__lgzy__xjp__ = "sg";
    document.querySelector(".form-warpper").style.display = "none";
}

document.querySelector("#btn_www").onclick = function () {
    window.localStorage.__lgzy__xjp__ = "www";
    location.href = "http://www.lingoace.com?from=sg";
}