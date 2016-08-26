System.config({
    map: {
        'app': 'js',
        'rxjs': 'node_modules/rxjs',
        'seven-segment': 'node_modules/seven-segment/dist/seven-segment.js',
        'rpsls': 'node_modules/rpsls/dist/rpsls.js'
    },
    packages: {
        'app': { main: 'main.js', defaultExtension: 'js' },
        'rxjs': { defaultExtension: 'js' },
        'seven-segment': { defaultExtension: 'js' },
        'rpsls': { defaultExtension: 'js' }
    }
});