/* eslint-disable */
import '../../common/js/layer_mobile/need/layer.css'
import '../../common/js/layer_mobile/layer.js'
import axios from 'axios'
import close from '../../images/header/close.png'
import remember from '../../images/header/remmbersel.png'
import no_remember from '../../images/header/remmber.png'
import logo from '../../images//header/logo.png'
import arrow from '../../images/header/arrow.png'


(function (window) {

    window.submitEmail = function (data, success, faild) {
        var reg = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;

        if (data.email != "") {
            if (reg.test(data.email)) {
                var http = axios.post('https://member.lingoace.com/api/v2/student/potential_user/', data);
                http.then(function ({ status, data } = res) {
                    if (success) { success(data) }
                    console.log(status, data);
                }, function (err) {
                    if (faild) { faild(data) }
                });

                layer.open({
                    content: 'Thank you for submitting your enquiry. Our course consultant will revert back to you within 24hours.'
                    , skin: 'msg'
                    , time: 3 //2秒后自动关闭
                });

            }
            else {
                layer.open({
                    content: 'Invalid email. '
                    , btn: 'OK'
                });
            }
        } else {
            layer.open({
                content: 'Invalid email. '
                , btn: 'OK'
            });
        }

    }

    var mask = `<div class="mask">
    <form class="masksign" action="https://dev.pplingo.com/accounts/login/" method="POST" id="login" >
        <p class="sgintitle"><span class="close"><img src="${close}" /></span><span class="font32 logintitle">Login</span><span class="signup" id="form-signup">Sign up</span></p>
        <p class="emailipt"><input type="text" class="username"  name="login" placeholder="Username"><span class="emailtextnone"></span></p>
        <p class="passwordipt"><input type="password" name="password" class="passwordinput passwordlogin" placeholder="Password"><img class="paswordnone" src="" alt=""></p>
        <div class="pasword">
            <p>
                <img class="remember-img" src="${remember}" alt="">
                <span id="remember">Remember me</span>
            </p>
                
            <p class="forgotpassword"><a href="https://dev.pplingo.com/accounts/password/reset/" target="_blank">Forgot Password?</a></p>
        </div>
        <div class="login">
            <button type="submit" class="loginbtn form-loginbtn">Login</button>
        </div>
    </form>
    <form class="maskregister" action="https://dev.pplingo.com/accounts/login/" method="POST" id="register" >
        <p class="sgintitle"><span class="icon_close"><img src="${close}" /></span><span class="font32 logintitle">Sign up</span><span class="signup" id="form-login">Login</span></p>
        <p class="username"><input type="text" class="username"  name="username" placeholder="Username"><span class="emailtextnone"></span></p>
        <p class="emailipt"><input type="text" class="username"  name="email" placeholder="Email"><span class="emailtextnone"></span></p>
        <p class="passwordipt"><input type="password" name="password1" class="passwordinput passwordlogin" placeholder="Password"><img class="paswordnone" src="" alt=""></p>
        <div class="login">
            <button type="submit" class="loginbtn">CREATE ACCOUNT</button>
        </div>
        <div class="gotomethod">
            <span class="text">By Signing up,you hereby agree to</span><span class="jump Lawsandregulations"> LingoAce Course Agreement /Terms of Use</span><span> and </span><span class="jump Lawsandregulations">Privacy Policy</span>
        </div>
    </form>
  </div>
  <div class="header">
    <div class="header_menu">
        <div class="top_bar font14">
            <ul>
                <li><a href="./referfriend.html" class="refer">Refer A Friend</a></li>
                <li><span>|</span></li>
                <li><a href="javascript:void(0)" class="login" id="show_login">Login</a></li>
                <li><span>|</span></li>
                <li><a href="" class="login">International Edition</a></li>
                </ul>
        </div>
        <div class="bottom_bar">
            <a href="./index.html">
                <img src="${logo}" alt="">
            </a>
            <ul class="menu_ul font16">
                <li><a href="./freeassessment.html">Free Chinese Assessment</a></li>
                <li class="learn">
                    <a href="javascript:void(0)">Learn Chinese</a>   
                    <img src="${arrow}" alt="">
                    <div class="select font16">
                        <div><a href="./methodology.html">The LingoAce Methodology</a></div>
                        <div><a href="./studentexp.html">The Student Experience</a></div>
                        <div><a href="./teacher.html">LingoAce Teachers</a></div>
                    </div>
                </li>
                <li><a href="./difference.html">The LingoAce Difference</a></li>
                <li><a href="./parents.html">For Parents</a></li>
                <li class="signup font14" id="show_signup">SIGN UP</li>
            </ul>
        </div>
    </div>
  </div>`

    var header = document.createElement('div')
    header.innerHTML = mask
    var layout = document.querySelector('.lg-layout')
    layout.parentNode.insertBefore(header, layout)

    var isRememberUser = true;

    function hideMask() {
        document.querySelector(".mask").style.display = 'none';
    }

    function showLogin() {
        document.querySelector(".mask").style.display = 'block';
        document.querySelector(".masksign").style.display = 'block'
        document.querySelector(".maskregister").style.display = 'none'
        document.querySelector(".close img").onclick = hideMask
    }

    window.showRegister = function () {
        document.querySelector(".mask").style.display = 'block';
        document.querySelector(".masksign").style.display = 'none'
        document.querySelector(".maskregister").style.display = 'block'
        document.querySelector(".icon_close img").onclick = hideMask
    }

    document.querySelector('.remember-img').onclick = function () {
        isRememberUser = !isRememberUser
        isRememberUser ? this.setAttribute("src", remember) : this.setAttribute("src", no_remember)
    }

    document.querySelector("#show_login").onclick = showLogin;
    document.querySelector("#show_signup").onclick = showRegister;
    document.querySelector('#form-signup').onclick = showRegister
    document.querySelector('#form-login').onclick = showLogin


})(window);
