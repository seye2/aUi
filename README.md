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
        
    ├── dev                         # temp
        ├── scss                    # sass(convert css image by compass)
        ├── js                      # original js(convert compress js)
        ├── images                  # original image(convert sprite image by compass)
        
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

###Sass
/dev/scss 폴더 내에 Sass를 구현하고 나면 front-src/css폴더에 <strong>파일명.min.css</strong>로 css 파일을 컴파일합니다.

###compass


###dotjs
dot은 layouts, partials를 지원하는 매우 빠른 template입니다.
사용법은 위의 [링크](https://www.npmjs.com/package/express-dot-engine)를 참고하시면 됩니다.

###front javascript 설치

bower설치 리스트(bower.json)
<ul>
<li>jQuery1.11.1</li>
<li>angularJS1.3.15</li>
<li>lodash3.8.0</li>
<li>slick-carousel1.5.0</li>
</ul>

웹서버 실행(node,express,gulp)
<pre>
$ gulp
</pre>

### 서버를 죽인 후에(CTRL+C) gulp 재시작 시 <strong style="color:red">Error: listen EADDRINUSE</strong> 에러 발생 시는
<pre>
$ ps -ef | grep node
pi        2451     1  0 02:19 pts/0    00:00:04 node app.js
$ kill -9 2451
$ gulp
</pre>
위와 같이 프로세스 확인 후 PID값을 사용해 강제 종료하고 재시작 한다.

확인 URL
[http://localhost:8080](http://localhost:8080)

<strong>추후 sass, compass 설정 예정</strong>

##aUI

###collapse




