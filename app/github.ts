fetch('https://api.github.com/users/tdillon/repos')
    .then(r => r.json())
    .then(d => document.querySelector('#numGithubRepos').textContent = d.length);
