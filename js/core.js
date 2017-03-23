(function () {

    var sources = {
        bang: "img/bang.png"
    };

    var img = new Image();
    img.src = sources.bang;


    var w = window;
    requestAnimationFrame = w.requestAnimationFrame || w.webkitRequestAnimationFrame || w.msRequestAnimationFrame || w.mozRequestAnimationFrame;


    var cxt;
    window.onload = function () {
        var canvas = document.createElement("canvas");
        cxt = canvas.getContext("2d");
        var width = document.body.clientWidth;
        var height = window.outerHeight;

        canvas.width = width;
        canvas.height = height;
        document.body.appendChild(canvas);
        cxt.fillStyle = "#000";
        cxt.fillRect(0, 0, width, height);

        // start();
        canvas.onmousedown = function (event) {
            var x = event.clientX;
            var y = event.clientY;
            x -= 32;
            y -= 32;
            new Bang(cxt, img, x, y).start();
        }

        // setInterval(function () {
        //     var x=Math.ceil(Math.random()*width);
        //     var y=Math.ceil(Math.random()*height);
        //     new Bang(cxt, img, x, y).start();
        // },100);

        cxt.font="40px Arial";
        cxt.fillStyle="#FFF";
        cxt.fillText("用鼠标点击试试！",width/2-150,height/2);

    }

    function Bang(cxt, img, x, y) {
        var index = 0;

        this.start = function () {
            draw();
        }
        function draw() {
            cxt.fillStyle="#000";
            cxt.fillRect(x, y, 64, 64);
            cxt.drawImage(img, index * 64, 0, 64, 64, x, y, 64, 64);
            if (index++ < 14) {
                // setTimeout(start, 1000/20);
                requestAnimationFrame(draw);
            }
        }
    }


})();

