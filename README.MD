npm install jspm --save-dev

jspm init  //all defaults except no transpiler

jspm install npm:seven-segment

comment out "format esm"; in 7.js, don't know where it came from.

Update config.js according to http://blog.opinionatedapps.com/a-lean-aurelia-typescript-deveopment-experience/

jspm bundle-sfx src/app --minify