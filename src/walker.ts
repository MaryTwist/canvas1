class Walker {
    x: number;
    y: number;
    d: number;
    s: number;
    spd: number;
    m: boolean;
    col: string;
    curKeyCode: number;

    keyDown(keyEvent: JQueryKeyEventObject): void {

        switch(keyEvent.which)
        {
            case 39:
                this.d = 0;
                this.m = true;
                this.curKeyCode = keyEvent.which;
                break;

            case 38:
                this.d = 1;
                this.m = true;
                this.curKeyCode = keyEvent.which;
                break;

            case 37:
                this.d = 2;
                this.m = true;
                this.curKeyCode = keyEvent.which;
                break;

            case 40:
                this.d = 3;
                this.m = true;
                this.curKeyCode = keyEvent.which;
                break;
        }
    }

    keyUp(keyEvent: JQueryKeyEventObject): void {
        if(keyEvent.which == this.curKeyCode) {
            this.m = false;
        }
    }

    update(): void {

        if(!this.m)
            return;

        switch(this.d)
        {
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

        if(this.x < 0) this.x = 640;
        if(this.x > 640) this.x = 0;
        if(this.y < 0) this.y = 480;
        if(this.y > 480) this.y = 0;
    }

    render(ctx: CanvasRenderingContext2D): void {
        ctx.clearRect(0, 0, 640, 480);

        ctx.fillStyle = this.col
        ctx.beginPath();
        ctx.rect(this.x - this.s / 2, this.y - this.s /2, this.s, this.s);
        ctx.fill();
        ctx.stroke();
    }

    constructor(x: number, y: number, s: number, spd: number, col: string) {
        this.x = x;
        this.y = y;
        this.s = s;
        this.spd = spd;
        this.col = col;
        this.m = false;
        this.d = 0;
    }
}

export { Walker };