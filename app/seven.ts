import {Seven, Digit} from 'seven-segment'
import {Observable} from 'rxjs/Observable'
import 'rxjs/add/observable/interval'



let canvas = <HTMLCanvasElement>document.querySelector('#cvsSeven');
let ctx = canvas.getContext('2d');
let seven = new Seven({ digit: Digit.SEVEN, height: canvas.height });
let xShift = (canvas.width - seven.width) / 2;

Observable.interval(1000).subscribe(n => {
    seven.digit = n % 10;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let s of seven.segments) {
        ctx.fillStyle = "rgba(255,255,255," + (s.on ? .87 : .05) + ")";
        ctx.beginPath();
        for (let p of s.points) {
            ctx.lineTo(xShift + p.x, p.y + .5);
        }
        ctx.closePath();
        ctx.fill();
    }
});


