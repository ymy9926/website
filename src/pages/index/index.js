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

// <div class="form-warpper">
//           <h1>Excel In Mandarin: The Fun and Effective Way</h1>
//           <p>
//             Singapore program based on learning strategies and a strong understanding of the MOE syllabus
//           </p>
//           <button class="lg-btn" id="btn_sg">Singapore Local Schools</button>
//           <button class="lg-btn" id="btn_www">International School and Curriculum</button>
//         </div>

// document.querySelector("#btn_sg").onclick = function () {
//     window.localStorage.__lgzy__xjp__ = "sg";
//     document.querySelector(".form-warpper").style.display = "none";
// }

// document.querySelector("#btn_www").onclick = function () {
//     window.localStorage.__lgzy__xjp__ = "www";
//     location.href = "http://www.lingoace.com?from=sg";
// }

var node = document.querySelector('.trustpilot-widget').parentNode;
document.querySelector('#trustBox').innerHTML = node.innerHTML;
node.remove();