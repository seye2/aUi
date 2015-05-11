# aUi

aUi는 angularJS template module입니다.

현재 collapse, tab, slick-slider(slider)가 만들어져 있습니다.
관련해서 기능을 추가할 예정입니다.

##폴더 구조 / 설명
    .
    ├── front-src                   # HTML,CSS, Javascript files
        ├── html                    # all HTML
        ├── template                # piece of angular html (contents)
        ├── css                     # all css
        ├── js                      # jquery, angular, lodash
        ├── data                    # json data
        └── images                  # all images
    ├── bower.json                  # front-src javascript (bower install)
    ├── package.json                # gulp install list (npm install)
    ├── gulpfile.js                 # use gulp package (automatic server)
    └── README.md

##서버 설치

###nodeJs
(서버는 raspberry pi 3.18 기준입니다.)

apt-get을 최신 버전으로 업데이트 해줍니다.
<pre>
$ sudo apt-get upgrade
$ sudo apt-get update
</pre>

내 라즈베리파이의 /etc/apt/sources.list file을 apt.adafruit.com package repository에 추가해주고 난 후 ,nodejs를 install 합니다.
<pre>
$ curl -sLS https://apt.adafruit.com/add | sudo bash
$ sudo apt-get install node
</pre>

nodejs 버전을 확인 할 수 있습니다.
<pre>
$ sudo node --version
$ v0.12.0
</pre>

gulp/bower설치
<pre>
$ sudo npm install -g gulp
$ sudo npm install -g bower
</pre>

관련 패키지 설치
<pre>
$ npm install
$ bower install
</pre>

<strong>* lisass가 에러가 난다면 <pre>$ npm install gulp-sass --save-dev</pre>를 재설치해 주시면 됩니다.</strong>

###front javascript 설치

bower설치 리스트(bower.json)
<ul>
<li>jQuery1.11.1</li>
<li>angularJS1.3.15</li>
<li>lodash3.8.0</li>
<li>slick-carousel1.5.0</li>
</ul>

##aUI

###collapse




