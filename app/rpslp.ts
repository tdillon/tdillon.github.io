import R from 'rpsls'
import {Observable} from 'rxjs/Observable'
import 'rxjs/add/observable/timer'
import 'rxjs/add/operator/delay'
import 'rxjs/add/operator/do'

let p1Score = 0;
let p2Score = 0;

let moves = ['fa-hand-rock-o', 'fa-hand-paper-o', 'fa-hand-scissors-o', 'fa-hand-lizard-o', 'fa-hand-spock-o']
let outcomeClasses = ['win', 'lose', 'draw'];

let [divSplash, divShoot, divPlay, divResults] = <NodeListOf<HTMLDivElement>>document.querySelectorAll('#rpsls > div');
let [iShootP1, iShootP2] = <NodeListOf<HTMLElement>>divShoot.querySelectorAll('div > *');
let [iPlayP1, spanPlayResult, iPlayP2] = <NodeListOf<HTMLElement>>divPlay.querySelectorAll('div > *');
let [spanResultsP1, spanResultsP2] = <NodeListOf<HTMLSpanElement>>divResults.querySelectorAll('div > span');
let [spanResultsP1Score, spanResultsP2Score] = <NodeListOf<HTMLSpanElement>>divResults.querySelectorAll('span > span');

Observable.timer(0, 7000)
    .do(x => {
        divSplash.classList.add('current');
        divShoot.classList.remove('current');
        divPlay.classList.remove('current');
        divResults.classList.remove('current');
        spanResultsP1.classList.remove(...outcomeClasses);
        spanResultsP2.classList.remove(...outcomeClasses);
    })
    .delay(1500)
    .do(x => {
        divSplash.classList.remove('current');
        divShoot.classList.add('current');
    })
    .delay(250)
    .do(x => iShootP1.className = iShootP2.className = `fa ${moves[0]}`)
    .delay(250)
    .do(x => iShootP1.className = iShootP2.className = `fa ${moves[1]}`)
    .delay(250)
    .do(x => iShootP1.className = iShootP2.className = `fa ${moves[2]}`)
    .delay(250)
    .do(x => iShootP1.className = iShootP2.className = `fa ${moves[3]}`)
    .delay(250)
    .do(x => iShootP1.className = iShootP2.className = `fa ${moves[4]}`)
    .delay(250)
    .do(x => {
        divShoot.classList.remove('current');
        divPlay.classList.add('current');

        let p1m = Math.floor(Math.random() * 5);
        let p2m = Math.floor(Math.random() * 5)
        let game = R.play(p1m, p2m);

        iPlayP1.className = `fa ${moves[p1m]}`;
        spanPlayResult.textContent = game.result;
        iPlayP2.className = `fa ${moves[p2m]}`;

        switch (game.outcome) {
            case 0://tie
                iPlayP1.classList.add('draw');
                iPlayP2.classList.add('draw');
                spanResultsP1.classList.add('draw');
                spanResultsP2.classList.add('draw');
                break;
            case 1://p1 win
                iPlayP1.classList.add('win');
                iPlayP2.classList.add('lose');
                spanResultsP1.classList.add('win');
                spanResultsP2.classList.add('lose');
                ++p1Score;
                break;
            case 2://p2 win
                iPlayP1.classList.add('lose');
                iPlayP2.classList.add('win');
                spanResultsP1.classList.add('lose');
                spanResultsP2.classList.add('win');
                ++p2Score;
                break;
            default:
                break;
        }
    })
    .delay(2000)
    .do(x => {
        divPlay.classList.remove('current');
        divResults.classList.add('current');
    })
    .delay(1000)
    .do(x => {
        spanResultsP1Score.textContent = p1Score.toString();
        spanResultsP2Score.textContent = p2Score.toString();
    })
    .delay(750)
    .do(x => divResults.classList.remove('current'))
    .subscribe();
