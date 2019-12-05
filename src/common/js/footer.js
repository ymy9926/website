/* eslint-disable */
(function () {

    var trustpilot = `
    <!-- TrustBox widget - Carousel -->
    <div class="trustpilot-widget" data-locale="en-US" data-template-id="53aa8912dec7e10d38f59f36" data-businessunit-id="5d27000b4739100001b1f28f" data-style-height="130px" data-style-width="74%" data-theme="light" data-stars="1,2,3,4,5">
    <a href="https://www.trustpilot.com/review/lingoace.com" target="_blank" rel="noopener">Trustpilot</a>
    </div>`;

    var trustpilotEle = document.createElement('div');
    trustpilotEle.attributes['class'] = 'trustpilot';
    trustpilotEle.innerHTML = trustpilot;
    document.body.appendChild(trustpilotEle);

    var script = document.createElement("script");
    script.type = "text/javascript";
    script.src = "//widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js";
    document.body.appendChild(script);

    var footerHtml = `
    <div class="footer-warpper">
    <div class="left">
    <i class="lg-logo"></i>
    <p class="info">
      LingoAce is the premiere provider of online Chinese classes for students aged 6-15. Our mission is to help
      make the world a better place through the joy of language learning.
    </p>
    <p class="copy">Copyright © 2019 LingoAce</p>
  </div>
  <div class="right">
    <ul class="footer-menus">
      <li><a href="./contactus.html">Contact Us</a></li>
      <li><a href="./rule.html">Terms & Conditions</a></li>
    </ul>
    <ul class="icon-warpper">
      <li>
        <a href=""><i class="lg-icon lg-icon-appstore"></i></a>
      </li>
      <li>
        <a href=""><i class="lg-icon lg-icon-kidsafe"></i></a>
      </li>
    </ul>
  </div>
</div>`;

    var footerEle = document.createElement("footer");
    footerEle.innerHTML = footerHtml;
    document.body.appendChild(footerEle);

})();