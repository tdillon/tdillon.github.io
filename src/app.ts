import {Seven} from 'seven-segment/7';

let x = new Seven();
x.angle = -46;
let canvas = <HTMLCanvasElement>document.querySelector('canvas');
let ctx = canvas.getContext('2d');
canvas.height = Math.ceil(x.height);
canvas.width = Math.ceil(x.width);

for (let s of x.segments) {
  ctx.fillStyle = `rgba(0,0,0,${s.on ? .87 : .05})`;
  ctx.beginPath();
  for (let p of s.points) {
    ctx.lineTo(p.x, p.y);
  }
  ctx.closePath();
  ctx.fill();
}
