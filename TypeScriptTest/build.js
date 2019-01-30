var browserify = require("browserify");
var tsify = require("tsify");

browserify()
    .add("./Scripts/ts/script.ts")
    .plugin("tsify", { noImplicitAny: true })
    .bundle()
    .pipe(process.stdout);