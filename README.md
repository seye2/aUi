# aUi

aUi는 angularJS template module입니다.

현재 collapse, tab, slick-slider(slider)가 만들어져 있습니다.
관련해서 기능을 추가할 예정입니다.

##폴더 구조 / 설명
    .
    ├── front-src                   # HTML,CSS, Javascript files
        ├── dotjs               # express-dot-engine example
        ├── html                    # all HTML
            ├── scss                # sass,compass example
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
/dev/scss 폴더 내에 Sass를 구현하고 나면 front-src/css폴더에 <strong>파일명.css</strong>로 scss 파일을 컴파일합니다.

###compass
compass가 깔려있지 않다면 rubygem을 사용하여 compass를 install 해줍니다.
<pre>
$ gem install compass
</pre>

자세한 설치 내용은 [compass 설치](https://www.npmjs.com/package/gulp-compass)에서 확인 하시면 됩니다.

[compass function](http://compass-style.org/reference/compass/)이 사용 가능합니다.
예를 들어 현재 dev/scss/box_shadow.scss파일 내에 <strong>@import "compass/css3";</strong>는 compass에서 제공하는 기능입니다.

유용한 기능인 이미지 스프라이트는 계속해서 예제를 올릴 예정입니다.

###JS
/dev/js 폴더 내에 js를 구현하고 나면 front-src/js폴더에 <strong>파일명.min.js</strong>로 파일을 압축합니다.

###dotjs
dot은 layouts, partials를 지원하는 매우 빠른 template입니다.
사용법은 위의 [링크](https://www.npmjs.com/package/express-dot-engine)를 참고하시면 됩니다.

###browser-sync
서버에 있는 HTML/css/js/images 파일들을 웹/모바일 브라우져와 동기와 시켜주는 프로그램이다.
[browsersync동영상](http://www.browsersync.io/)
동영상에서 보는 것처럼 동일한 url을 가지고 서버 코드를 수정하면 내용을 동기화 시켜준다.
npm으로 설치 후

HTML하단 </body>태그 위에 아래와 같이 스크립트 코드를 넣어준다.

<script type='text/javascript' id="__bs_script__">
    //<![CDATA[
    document.write("<script async src='http://HOST:3000/browser-sync/browser-sync-client.2.7.1.js'><\/script>".replace("HOST", location.hostname));
    //]]>\
</script>

<strong>**서버를 껐다 다시 켰을 때는 브라우져 또한 새탭(새브라우져)에서 url을 다시 입력해 주어야 동기화 된다.

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

#### 서버를 죽인 후에(CTRL+C) gulp 재시작 시 <strong style="color:red">Error: listen EADDRINUSE</strong> 에러 발생 시
<pre>
$ ps -ef | grep node
pi        2451     1  0 02:19 pts/0    00:00:04 node app.js
$ kill -9 2451
$ gulp
</pre>
위와 같이 프로세스 확인 후 PID값을 사용해 강제 종료하고 재시작 한다.

확인 URL
[http://localhost:8080](http://localhost:8080)

** image sprite 추가, angular modal 모듈 추가

##aUI

###collapse




