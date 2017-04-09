class Walker {
    x: number;
    y: number;
    d: number;
    s: number;
    m: boolean;
    col: string;

    update(): void {

    }

    render(ctx: CanvasRenderingContext2D): void {
        ctx.fillStyle = this.col
        ctx.beginPath();
        ctx.rect(this.x - this.s / 2, this.y - this.s /2, this.s, this.s);
        ctx.fill();
        ctx.stroke();
    }

    constructor(x: number, y: number, s: number, col: string) {
        this.x = x;
        this.y = y;
        this.s = s;
        this.col = col;
    }
}

$(document).ready(() => {
    var canvas : HTMLCanvasElement = $("#mainCanvas").get(0) as HTMLCanvasElement;
    var ctx : CanvasRenderingContext2D = canvas.getContext("2d");

    canvas.width = 640;
    canvas.height = 480;

    var w1: Walker = new Walker(32, 32, 64, "#ef024b"); 
    w1.render(ctx);
    /*

    ctx.strokeStyle = "#ff0f02";
    ctx.beginPath();
    ctx.moveTo(20, 20);
    ctx.lineTo(20 * 100, 20 * 100);
    ctx.stroke();
    */
});