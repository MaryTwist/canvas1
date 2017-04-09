var Walker = (function () {
    function Walker(x, y, s, col) {
        this.x = x;
        this.y = y;
        this.s = s;
        this.col = col;
    }
    Walker.prototype.update = function () {
    };
    Walker.prototype.render = function (ctx) {
        ctx.fillStyle = this.col;
        ctx.beginPath();
        ctx.rect(this.x - this.s / 2, this.y - this.s / 2, this.s, this.s);
        ctx.fill();
        ctx.stroke();
    };
    return Walker;
}());
$(document).ready(function () {
    var canvas = $("#mainCanvas").get(0);
    var ctx = canvas.getContext("2d");
    canvas.width = 640;
    canvas.height = 480;
    var w1 = new Walker(32, 32, 64, "#ef024b");
    w1.render(ctx);
});
