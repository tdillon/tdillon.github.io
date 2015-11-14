System.config({
  baseURL: "/",
  defaultJSExtensions: true,
  transpiler: "typescript",
  paths: {
    "src": "src",
    "npm:*": "jspm_packages/npm/*"
  },
  map: {
    "seven-segment": "npm:seven-segment@3.0.1",
    "typescript": "npm:typescript@1.6.2"
  },
  "packages": {
    "src": {
      "defaultExtension": "ts"
    }
  }
});
