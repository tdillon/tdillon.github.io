import {Observable} from 'rxjs/Observable'
import 'rxjs/add/observable/fromPromise'
import 'rxjs/add/observable/from'
import 'rxjs/add/observable/range'
import 'rxjs/add/operator/mergeMap'
import 'rxjs/add/operator/reduce'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/retryWhen'

/**
 * See "GET /users/:username/repos" documentation at https://developer.github.com/v3/repos/.
 * I'm only adding properties that I'm using.
 */
interface GithubUserRepo {
    name: string;
    size: number;
}

/**
 * See "GET /repos/:owner/:repo/stats/contributors" documentation at https://developer.github.com/v3/repos/statistics/.
 * I'm only adding properties that I'm using.
 */
interface GithubUserRepoStats {
    author: { login: string };
    total: number;
    size: number;
    weeks: Array<{ a: number, d: number }>;
}

let [spanNumRepo, spanNumCommit, spanNumAdd, spanNumDel, spanNumChurn, spanSize] = <NodeListOf<HTMLSpanElement>>document.querySelectorAll('#github span');
let user = 'tdillon';
let requestInit = { cache: <RequestCache>'no-cache' };  //don't cache fetches.  stats api may give 202 on first hit 



Observable.range(1, 1)
    .mergeMap(() => Observable.fromPromise(fetch(`https://api.github.com/users/${user}/repos`, requestInit)))
    .mergeMap(r => { if (r.status !== 200) { throw r; } return r.json(); })
    .retryWhen(error => error.delay(5000))
    .mergeMap((repos: Array<GithubUserRepo>) => Observable.from(repos))
    .mergeMap((repo: GithubUserRepo) => Observable.range(1, 1)
        .mergeMap(() => Observable.fromPromise(fetch(`https://api.github.com/repos/${user}/${repo.name}/stats/contributors`, requestInit)))
        .mergeMap(r => { if (r.status !== 200) { throw r; } return r.json<Array<GithubUserRepoStats>>(); })
        .retryWhen(error => error.delay(5000))
        .map(urs => { let stats = urs.find(s => s.author.login === user); stats.size = repo.size; return stats; })
    )
    .reduce((acc: { r: number, c: number, a: number, d: number, s: number }, cur: GithubUserRepoStats) => {
        acc.a += cur.weeks.reduce((a, c) => a += c.a, 0);  //total # of adds for this repo
        acc.c += cur.total;                                //total # of commits for this repo
        acc.d += cur.weeks.reduce((a, c) => a += c.d, 0);  //total # of deletes for this repo
        acc.r += 1;                                        //add 1 to the total # of repos
        acc.s += cur.size;                                 //LOC for this repo
        return acc;
    }, { r: 0, c: 0, a: 0, d: 0, s: 0 })
    .subscribe(d => {
        spanNumRepo.textContent = d.r.toString();
        spanNumCommit.textContent = d.c.toString();
        spanNumAdd.textContent = d.a.toString();
        spanNumDel.textContent = d.d.toString();
        spanNumChurn.textContent = (d.a - d.d).toString();
        spanSize.textContent = d.s.toString();
    });