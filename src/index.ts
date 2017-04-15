import { Walker } from "./walker";

$(document).ready(() => {
    var canvas : HTMLCanvasElement = $("#mainCanvas").get(0) as HTMLCanvasElement;
    var ctx : CanvasRenderingContext2D = canvas.getContext("2d");

    canvas.width = 640;
    canvas.height = 480;

    var w1: Walker = new Walker(32, 32, 64, 5, "#ef024b"); 

    $(document).keydown(eventObject => w1.keyDown(eventObject));
    $(document).keyup(eventObject => w1.keyUp(eventObject));

    setInterval(() => 
    {
        w1.update();
        w1.render(ctx);
    }, 1);
});
