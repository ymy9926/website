/* eslint-disable */
import '../../common/css/base.less';
import './index.less'
import '../../common/js/header'
import '../../common/js/footer'
import imageUrl from '../../images/index/lingoace-bg@x2.jpg'
import videoUrl from '../../images/index/mv-lingoace.mp4'

document.querySelector('video').poster = imageUrl;
document.querySelector('video source,video').src = videoUrl;