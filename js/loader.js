/**
* Created with 1-1.
* User: tlu37317
* Date: 2014-10-05
* Time: 06:00 AM
* To change this template use Tools | Templates.
*/
window.addEventListener("load", function () {

    Modernizr.load([
        {
                load : [
                    "vendor/jquery/jquery.min.js",
                    "vendor/distrib-jquery-mobile/js/jquery.mobile.js",
                    "vendor/sizzle/dist/sizzle.min.js",
                    "js/game.js"
                ],
                complete : function() {
                    setInterval(function () { gameModule.gameStart() }, 3000);  
                }
        }
    ]);
	
}, false);