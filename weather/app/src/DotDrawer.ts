import {Color} from './Color'

export class DotDrawer {
  static simple(ctx: CanvasRenderingContext2D, x: number, y: number, radius: number, color: string) {
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, 2 * Math.PI, false);
    ctx.fill();
  }

  static moon(ctx: CanvasRenderingContext2D, x: number, y: number, r: number, color: string, moonPhase: number) {
    var epsilon = .001;
    //Draw 'dark' portion of moon
    ctx.beginPath();
    ctx.fillStyle = '#333';  //TODO make configurable
    ctx.arc(x, y, r, 0, 2 * Math.PI, false);
    ctx.fill();

    //Draw 'light' portion of moon
    ctx.beginPath();
    ctx.fillStyle = color;

    if (moonPhase < .25) {
      var mP = r * (.25 - moonPhase) * 4;
      var eR = Math.pow(r * 2, 2) / (8 * mP) + (mP / 2);
      var eX = x + 1 * (eR - mP);
      var angle = Math.atan(r / (eR - mP));
      ctx.arc(eX, y, eR, angle + Math.PI, -angle + Math.PI, true);
      ctx.arc(x, y, r, Math.PI / 2, -Math.PI / 2, false);
    } else if (moonPhase <= .5) {
      var mP = r * (moonPhase - .25) * 4;
      var eR = Math.pow(r * 2, 2) / (8 * mP) + (mP / 2);
      var eX = x + -1 * (eR - mP);
      var angle = Math.atan(r / (eR - mP));
      if (mP > epsilon) {
        ctx.arc(eX, y, eR, angle, -angle, true);
      }
      ctx.arc(x, y, r, Math.PI / 2, -Math.PI / 2, false);
    } else if (moonPhase <= .75) {
      var mP = r * (.75 - moonPhase) * 4;
      var eR = Math.pow(r * 2, 2) / (8 * mP) + (mP / 2);
      var eX = x + 1 * (eR - mP);
      var angle = Math.atan(r / (eR - mP));
      ctx.arc(eX, y, eR, angle + Math.PI, -angle + Math.PI, true);
      ctx.arc(x, y, r, Math.PI / 2, -Math.PI / 2, true);
    } else {
      var mP = r * (moonPhase - .75) * 4;
      var eR = Math.pow(r * 2, 2) / (8 * mP) + (mP / 2);
      var eX = x + -1 * (eR - mP);
      var angle = Math.atan(r / (eR - mP));
      if (mP > epsilon) {
        ctx.arc(eX, y, eR, angle, -angle, true);
      }
      ctx.arc(x, y, r, -Math.PI / 2, Math.PI / 2, false);
    }

    ctx.fill();
  }
}
