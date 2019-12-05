/* eslint-disable */
import "@babel/polyfill";
import './about.less';
import '../../common/js/header'
import imgUrl from '../../images/cat.jpeg';


const img = document.createElement("img");
img.style.width = "200px";
img.src = imgUrl;
document.body.appendChild(img);