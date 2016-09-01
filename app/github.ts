import {Observable} from 'rxjs/Observable'
import 'rxjs/add/observable/fromPromise'
import 'rxjs/add/observable/from'
import 'rxjs/add/operator/mergeMap'
import 'rxjs/add/operator/reduce'

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
    weeks: Array<{ a: number, d: number }>;
}


let [spanNumRepo, spanNumCommit, spanNumAdd, spanNumDel, spanSize] = <NodeListOf<HTMLSpanElement>>document.querySelectorAll('#github span');

Observable.fromPromise(fetch('https://api.github.com/users/tdillon/repos').then(r => r.json()))
    //retry when not 200?
    .mergeMap((repos: Array<GithubUserRepo>) => Observable.from(repos))
    .mergeMap((repo: GithubUserRepo) => /* TODO how do i get repo.size to the reduce function? */ Observable.fromPromise(fetch(`https://api.github.com/repos/tdillon/${repo.name}/stats/contributors`).then(r => r.json())))
    //TODO retry when response is 202 or not 200?
    .reduce((acc: { r: number, c: number, a: number, d: number, s: number }, cur: Array<GithubUserRepoStats>) => {
        let stats = cur.find(s => s.author.login === 'tdillon');

        acc.a += stats.weeks.reduce((a, c) => a += c.a, 0);  //total # of adds for this repo
        acc.c += stats.total;                                //total # of commits for this repo
        acc.d += stats.weeks.reduce((a, c) => a += c.d, 0);  //total # of deletes for this repo
        acc.r += 1;                                          //add 1 to the total # of repos
        acc.s -= 3.14;                                      //TODO i need to pull in the 'size' property from the 2nd mergeMap

        return acc;
    }, { r: 0, c: 0, a: 0, d: 0, s: 0 }) 
    .subscribe((d: any) => {
        spanNumRepo.textContent = d.r;
        spanNumCommit.textContent = d.c;
        spanNumAdd.textContent = d.a;
        spanNumDel.textContent = d.d;
        spanSize.textContent = d.s;
    });