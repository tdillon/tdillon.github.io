import {Observable} from 'rxjs/Observable'
import 'rxjs/add/observable/interval'
import 'rxjs/add/operator/delay'
import 'rxjs/add/operator/do'

let rpslsP1Score = <HTMLSpanElement>document.querySelector('#rpslsP1Score');
let rpslsP2Score = <HTMLSpanElement>document.querySelector('#rpslsP2Score');

let p1Score = 0;
let p2Score = 0;

let moves = ['fa-hand-rock-o', 'fa-hand-paper-o', 'fa-hand-scissors-o', 'fa-hand-lizard-o', 'fa-hand-spock-o']

let p1 = <HTMLElement>document.querySelector('#rpslpP1Move');
let p2 = <HTMLElement>document.querySelector('#rpslpP2Move');

Observable.interval(4000)
    .do(x => {
        p1.style.color = p2.style.color = 'white';
        p1.className = p2.className = `fa ${moves[0]}`;
    })
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
    })
    .delay(250)
    .do(x => {
        let winner = Math.floor(Math.random() * 3);

        switch (winner) {
            case 0://tie
                p1.style.color = p2.style.color = '#09c';
                break;
            case 1://p1 win
                p1.style.color = '#0f0';
                p2.style.color = '#f00';
                ++p1Score;
                break;
            case 2://p2 win
                p1.style.color = '#f00';
                p2.style.color = '#0f0';
                ++p2Score;
                break;
            default:
                break;
        }

        rpslsP1Score.textContent = p1Score.toString();
        rpslsP2Score.textContent = p2Score.toString();
    })
    .subscribe();
