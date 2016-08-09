import {Observable} from 'rxjs/Observable'
import 'rxjs/add/observable/interval'
import 'rxjs/add/operator/delay'
import 'rxjs/add/operator/do'

let rpslsP1Score = <HTMLSpanElement>document.querySelector('#rpslsP1Score');
let rpslsP2Score = <HTMLSpanElement>document.querySelector('#rpslsP2Score');

let rpslsP1 = <HTMLSpanElement>document.querySelector('#rpslsP1');
let rpslsP2 = <HTMLSpanElement>document.querySelector('#rpslsP2');

let p1Score = 0;
let p2Score = 0;

let moves = ['fa-hand-rock-o', 'fa-hand-paper-o', 'fa-hand-scissors-o', 'fa-hand-lizard-o', 'fa-hand-spock-o']
let outcomeClasses = ['win', 'loose', 'draw'];

let p1 = <HTMLElement>document.querySelector('#rpslsP1Move');
let p2 = <HTMLElement>document.querySelector('#rpslsP2Move');

let [r1, r2, r3] = <NodeListOf<HTMLDivElement>>document.querySelectorAll('#rpsls > div');

Observable.interval(7000)
    .do(x => {
        r1.classList.add('current');
        r2.classList.remove('current');
        r3.classList.remove('current');
        p1.classList.remove('win', 'loose', 'draw');
        p2.classList.remove('win', 'loose', 'draw');
        rpslsP1.classList.remove('win', 'loose', 'draw');
        rpslsP2.classList.remove('win', 'loose', 'draw');
    })
    .delay(1500)
    .do(x => {
        r1.classList.remove('current');
        r2.classList.add('current');
    })
    .delay(250)
    .do(x => p1.className = p2.className = `fa ${moves[0]}`)
    .delay(250)
    .do(x => p1.className = p2.className = `fa ${moves[1]}`)
    .delay(250)
    .do(x => p1.className = p2.className = `fa ${moves[2]}`)
    .delay(250)
    .do(x => p1.className = p2.className = `fa ${moves[3]}`)
    .delay(250)
    .do(x => p1.className = p2.className = `fa ${moves[4]}`)
    .delay(250)
    .do(x => {
        p1.className = `fa ${moves[Math.floor(Math.random() * moves.length)]}`;
        p2.className = `fa ${moves[Math.floor(Math.random() * moves.length)]}`;

        let winner = Math.floor(Math.random() * 3);

        switch (winner) {
            case 0://tie
                p1.classList.add('draw');
                p2.classList.add('draw');
                rpslsP1.classList.add('draw');
                rpslsP2.classList.add('draw');
                break;
            case 1://p1 win
                p1.classList.add('win');
                p2.classList.add('loose');
                rpslsP1.classList.add('win');
                rpslsP2.classList.add('loose');
                ++p1Score;
                break;
            case 2://p2 win
                p1.classList.add('loose');
                p2.classList.add('win');
                rpslsP1.classList.add('loose');
                rpslsP2.classList.add('win');
                ++p2Score;
                break;
            default:
                break;
        }
    })
    .delay(1500)
    .do(x => {
        r2.classList.remove('current');
        r3.classList.add('current');
    })
    .delay(1000)
    .do(x => {
        rpslsP1Score.textContent = p1Score.toString();
        rpslsP2Score.textContent = p2Score.toString();
    })
    .delay(750)
    .do(x => r3.classList.remove('current'))
    .subscribe();
