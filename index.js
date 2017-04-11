var Walker = (function () {
    function Walker(x, y, s, spd, col) {
        this.x = x;
        this.y = y;
        this.s = s;
        this.spd = spd;
        this.col = col;
        this.m = false;
        this.d = 0;
    }
    Walker.prototype.keyDown = function (keyEvent) {
        switch (keyEvent.which) {
            case 39:
                this.d = 0;
                this.m = true;
                break;
            case 38:
                this.d = 1;
                this.m = true;
                break;
            case 37:
                this.d = 2;
                this.m = true;
                break;
            case 40:
                this.d = 3;
                this.m = true;
                break;
        }
    };
    Walker.prototype.keyUp = function (keyEvent) {
        this.m = false;
    };
    Walker.prototype.update = function () {
        if (!this.m)
            return;
        switch (this.d) {
            case 0:
                this.x += this.spd;
                break;
            case 1:
                this.y -= this.spd;
                break;
            case 2:
                this.x -= this.spd;
                break;
            case 3:
                this.y += this.spd;
                break;
            default:
                this.d = 0;
                this.m = false;
                return;
        }
        if (this.x < 0)
            this.x = 640;
        if (this.x > 640)
            this.x = 0;
        if (this.y < 0)
            this.y = 480;
        if (this.y > 480)
            this.y = 0;
    };
    Walker.prototype.render = function (ctx) {
        ctx.clearRect(0, 0, 640, 480);
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
    var w1 = new Walker(32, 32, 64, 5, "#ef024b");
    $(document).keydown(function (eventObject) { return w1.keyDown(eventObject); });
    $(document).keyup(function (eventObject) { return w1.keyUp(eventObject); });
    setInterval(function () { return w1.update(); }, 1);
    setInterval(function () { return w1.render(ctx); });
});
