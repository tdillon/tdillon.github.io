fetch('https://api.github.com/users/tdillon/repos')
    .then(r => r.json())
    .then(d => document.querySelector('#numGithubRepos').textContent = d.length);


//https://api.github.com/repos/tdillon/tdillon.github.io/stats/contributors
//get for each repo to get # of commits, additions, and deletions